package com.dawool.api.config;

import com.dawool.api.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * JWT 토큰을 파싱하여 인증 정보를 추출하고, 추출된 정보를 이용해 사용자 인증을 수행
 *
 * @author 이준
 */
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

    private final JwtTokenProvider jwtTokenProvider;

    /**
     * 프론트에서 전달한 토큰 유효성 검사
     *
     * @param request
     * @param response
     * @param filterChain
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String token = getTokenFromHeader(request);

        if (token != null && jwtTokenProvider.validateToken(token) != null) {
            Authentication authentication = jwtTokenProvider.getAuthentication(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        filterChain.doFilter(request, response);
    }

    /**
     * 프론트에서 전달 받은 토큰 꺼내기
     *
     * @param request
     * @return 토큰
     */
    private String getTokenFromHeader(HttpServletRequest request) {
        // Authorization 헤더를 꺼냄
        String authorizationToken = request.getHeader("Authorization");

        // JWT 토큰이 존재하는지 확인
        if (authorizationToken != null && authorizationToken.startsWith("Bearer ")) {
            return authorizationToken.substring("Bearer ".length());
        }
        return null;
    }
}
