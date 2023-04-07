package com.dawool.api.jwt;

import com.dawool.api.dto.user.TokenResDto;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

/**
 * JWT 토큰 생성 및 유효성 확인
 *
 * @author 이준
 */
@Component
@Slf4j
public class JwtTokenProvider {

    private final Key key;
    private final String TYP = "typ";
    private final String JWT = "JWT";
    private final String AUTHORITIES_KEY = "Authentication";
    // Access Token 시간
    private static final long ACCESS_EXPIRE_TIME = 2 * 60 * 60 * 1000L; // 2시간

    // Refresh Token 시간
    private static final long REFRESH_EXPIRE_TIME = 30 * 24 * 60 * 60 * 1000L;

    /**
     * 생성자
     *
     * @param secretKey
     */
    public JwtTokenProvider(@Value("${jwt.secret-key}") String secretKey) {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    /**
     * 액세스, 리프래시 토큰 생성
     *
     * @param authentication 인증 객체
     * @return 생성한 액세스, 리프래시 토큰
     */
    public TokenResDto generateToken(Authentication authentication) {
        String authorities = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));

        long now = (new Date()).getTime();

        String accessToken = createAccessToken(authentication.getName(), now);

        String refreshToken = createRefreshToken(authentication.getName(), now);

        return TokenResDto.builder()
                .grantType("Bearer")
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .accessTokenExpiresIn(now+ACCESS_EXPIRE_TIME)
                .build();
    }

    /**
     * 액세스 토큰 생성
     *
     * @param userObjectId 회원 ObjectId
     * @param now 현재시간
     * @return 액세스 토큰
     */
    public String createAccessToken(String userObjectId, long now) {

        return Jwts.builder()
                .setHeaderParam(TYP,JWT)
                .setSubject(userObjectId)
                .claim(AUTHORITIES_KEY, "USER")
                .setIssuedAt(new Date(now))
                .setExpiration(new Date(now + ACCESS_EXPIRE_TIME))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    /**
     * 리프래시 토큰 생성
     *
     * @param userObjectId
     * @param now
     * @return 리프래시 토큰
     */
    public String createRefreshToken(String userObjectId, long now) {
        return Jwts.builder()
                .setHeaderParam(TYP,JWT)
                .setSubject(userObjectId)
                .setExpiration(new Date(now + REFRESH_EXPIRE_TIME))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    /**
     * 토큰 파싱
     *
     * @param token
     * @return 파싱한 토큰
     */
    public Claims getClaimsByToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    /**
     * 토큰 만료 여부
     *
     * @param token
     * @return 토큰 만료 여부
     */
    public boolean isExpired(String token) {
        return this.getClaimsByToken(token).getExpiration().before(new Date());
    }

    /**
     * 토큰의 권한과 유효한지 확인
     *
     * @param token
     * @return 인증 객체
     */
    public Authentication getAuthentication(String token) {
        Claims claims = getClaimsByToken(token);
        if (claims != null) {
            Collection<? extends GrantedAuthority> authorities =
                    Arrays.stream(new String[]{claims.get(AUTHORITIES_KEY).toString()})
                            .map(SimpleGrantedAuthority::new)
                            .collect(Collectors.toList());

            User principal = new User(claims.getSubject(), "", authorities);

            return new UsernamePasswordAuthenticationToken(principal, token, authorities);
        }
        return null;
    }

    /**
     * 토큰이 유효한지 검사
     *
     * @param token
     * @return 파싱한 토큰
     */
    public Claims validateToken(String token) {
        try {
            log.info("Token Validated");
            return this.getClaimsByToken(token); // token의 Body가 하기 exception들로 인해 유효하지 않으면 각각에 해당하는 로그 콘솔에 찍음
        }
        catch(SignatureException e) {
            log.error("Invalid signature.");
            throw new JwtException("Invalid signature. 발생");
        } catch (SecurityException e) {
            log.error("Security Error.");
            throw new JwtException("Invalid JWT signature. 발생");
        } catch (MalformedJwtException e) {
            log.error("Not Correctly JWT.");
            // 처음 로그인(/auth/kakao, /auth/google) 시, AccessToken(AppToken) 없이 접근해도 token validate을 체크하기 때문에 exception 터트리지 않고 catch합니다.
            throw new JwtException("Not Correctly JWT.");
        } catch (ExpiredJwtException e) {
            log.error("Expired JWT token.");
            throw new JwtException("Expired JWT token.");
        } catch (UnsupportedJwtException e) {
            log.error("Unsupported JWT token.");
            throw new JwtException("Expired JWT token.");
        } catch (IllegalArgumentException e) {
            log.error("JWT token compact of handler are invalid.");
            throw new JwtException("JWT token compact of handler are invalid.");
        }
    }

}
