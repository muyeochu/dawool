package com.dawool.api.config;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userName, null, List.of);

        String jwt = getJwtFromHeader(request);



        filterChain.doFilter(request, response);
    }

    private String getJwtFromHeader(HttpServletRequest request) {
        // Authorization 헤더를 꺼냄
        String authorizationToken = request.getHeader("Authorization");

        // JWT 토큰이 존재하는지 확인
        if (authorizationToken != null && authorizationToken.startsWith("Bearer ")) {
            return authorizationToken.substring("Bearer ".length());
        }
    }
}
