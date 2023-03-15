package com.dawool.api.jwt;

import com.dawool.api.dto.TokenResDto;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
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
import java.util.Collections;
import java.util.Date;
import java.util.stream.Collectors;

@Component
@Slf4j
public class JwtTokenProvider {

    private final Key key;
    private final String TYP = "typ";
    private final String JWT = "JWT";
    private final String AUTHORITIES_KEY = "Authentication";
    // Access Token 시간
    private static final long ACCESS_EXPIRE_TIME = 1 * 1 * 60 * 1000L; //

    // Refresh Token 시간
    private static final long REFRESH_EXPIRE_TIME = 30 * 24 * 60 * 1000L;

    // secret key 값으로 토큰 생성
    public JwtTokenProvider(@Value("${jwt.secret-key}") String secretKey) {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    // 토큰 생성 설정
    public TokenResDto generateToken(Authentication authentication) {
//        String authorities = authentication.getAuthorities().stream()
//                .map(GrantedAuthority::getAuthority)
//                .collect(Collectors.joining(","));

        long now = (new Date()).getTime();

        String accessToken = Jwts.builder()
                .setHeaderParam(TYP,JWT)
                .setSubject(authentication.getName())
//                .claim(AUTHORITIES_KEY, authorities)
                .setIssuedAt(new Date(now))
                .setExpiration(new Date(now + ACCESS_EXPIRE_TIME))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();

        String refreshToken = Jwts.builder()
                .setHeaderParam(TYP,JWT)
                .setExpiration(new Date(now + REFRESH_EXPIRE_TIME))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();


        return TokenResDto.builder()
                .grantType("Bearer")
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .accessTokenExpiresIn(now+ACCESS_EXPIRE_TIME)
                .build();
    }

    public Claims getClaimsByToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
    // 토큰 만료 여부 확인
    public boolean isExpired(String token) {
        return this.getClaimsByToken(token).getExpiration().before(new Date());
    }

    public Authentication getAuthentication(String token) {
        Claims claims = getClaimsByToken(token);
        if (claims != null) {
//            Collection<? extends GrantedAuthority> authorities =
//                    Arrays.stream(new String[]{claims.get(AUTHORITIES_KEY).toString()})
//                            .map(SimpleGrantedAuthority::new)
//                            .collect(Collectors.toList());

            User principal = new User(claims.getSubject(), "", Collections.EMPTY_LIST);

            return new UsernamePasswordAuthenticationToken(principal, token, null);
        }
        return null;
    }

    public Claims validateToken(String token) {
        try {
            return this.getClaimsByToken(token); // token의 Body가 하기 exception들로 인해 유효하지 않으면 각각에 해당하는 로그 콘솔에 찍음
        } catch (SecurityException e) {
            log.info("Invalid JWT signature.");
        } catch (MalformedJwtException e) {
            log.info("Invalid JWT token.");
            // 처음 로그인(/auth/kakao, /auth/google) 시, AccessToken(AppToken) 없이 접근해도 token validate을 체크하기 때문에 exception 터트리지 않고 catch합니다.
        } catch (ExpiredJwtException e) {
            log.info("Expired JWT token.");
        } catch (UnsupportedJwtException e) {
            log.info("Unsupported JWT token.");
        } catch (IllegalArgumentException e) {
            log.info("JWT token compact of handler are invalid.");
        }
        return null;
    }

}
