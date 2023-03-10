package com.dawool.api.service;

import com.dawool.api.entity.User;
import com.dawool.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.BodyInserters;
import reactor.core.publisher.Mono;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    @Value("${kakao.restapi.key}")
    private String kakaoAPIKey;
    
    // 카카오 토큰 발급 후 회원가입 확인
    public Map<String, String> getKakaoAccessToken(String code) {
        String accessToken = "";
        String refreshToken = "";
        String redirectURI = "http://localhost:8888/api/user/kakao/callback";

        MultiValueMap<String, String> data = new LinkedMultiValueMap<>();
        Map<String, String> result = new HashMap<>();
        data.add("grant_type", "authorization_code");
        data.add("client_id", kakaoAPIKey);
        data.add("redirect_uri", redirectURI);
        data.add("code",code);

        // 카카오 로그인으로 받아온 code로 토큰 발급.
        Mono<String> mono = WebClient.builder().baseUrl("https://kauth.kakao.com")
                .build()
                .post()
                .uri("/oauth/token")
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .body(BodyInserters.fromFormData(data))
                .exchangeToMono(response -> response.bodyToMono(String.class));

        JSONObject info = new JSONObject(mono.block());

        accessToken = info.getString("access_token");
        refreshToken = info.getString("refresh_token");

        result.put("accessToken", accessToken);
        result.put("refreshToken", refreshToken);

        getUserInfoByToken(accessToken);

        return result;
    }
    
    // 토큰으로 카카오 회원 정보 확인.
    public String getUserInfoByToken(String token) {
        Mono<String> mono = WebClient.builder().baseUrl("https://kapi.kakao.com")
                .build()
                .post()
                .uri("/v2/user/me")
                .header("Authorization", "Bearer ")
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .exchangeToMono(response -> response.bodyToMono(String.class));

        JSONObject info = new JSONObject(mono.block());

        System.out.println(info);
        User user = new User();
        userRepository.save(user);
        return null;
    }
}
