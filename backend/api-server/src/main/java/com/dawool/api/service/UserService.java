package com.dawool.api.service;

import org.json.JSONObject;
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
public class UserService {

    @Value("${kakao.restapi.key}")
    private String kakaoAPIKey;

    public Map<String, String> getKakaoAccessToken(String code) {
        String accessToken = "";
        String refreshToken = "";

        String redirectURI = "http://localhost:8888/api/user/kakao/userinfo";
        MultiValueMap<String, String> data = new LinkedMultiValueMap<>();
        Map<String, String> result = new HashMap<>();
        data.add("grant_type", "authorization_code");
        data.add("client_id", kakaoAPIKey);
        data.add("redirect_uri", redirectURI);
        data.add("code",code);

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

        return result;
    }

    public String getUserInfoByToken() {
        Mono<String> mono = WebClient.builder().baseUrl("https://kapi.kakao.com")
                .build()
                .get()
                .uri("/v2/user/me")
                .header("Authorization", "Bearer ")
                .exchangeToMono(response -> response.bodyToMono(String.class));
        return null;
    }
}
