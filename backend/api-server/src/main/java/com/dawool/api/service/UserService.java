package com.dawool.api.service;

import com.dawool.api.dto.TokenResDto;
import com.dawool.api.dto.UserResDto;
import com.dawool.api.entity.User;
import com.dawool.api.jwt.JwtTokenProvider;
import com.dawool.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.BodyInserters;
import reactor.core.publisher.Mono;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;
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
        data.add("code", code);

        // 카카오 로그인으로 받아온 code로 토큰 발급.
        Mono<String> mono = WebClient.builder().baseUrl("https://kauth.kakao.com")
                .build()
                .post()
                .uri("/oauth/token")
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .body(BodyInserters.fromFormData(data))
//                .retrieve()
//                .bodyToMono(String.class);
                .exchangeToMono(response -> response.bodyToMono(String.class));

        JSONObject info = new JSONObject(mono.block());

        accessToken = info.getString("access_token");
        refreshToken = info.getString("refresh_token");

        String nickName = getKakaoUserInfoByToken(accessToken);

        result.put("accessToken", accessToken);
        result.put("refreshToken", refreshToken);
        result.put("nickName",nickName);

        return result;
    }

    // 토큰으로 카카오 회원 정보 확인.
    public String getKakaoUserInfoByToken(String token) {
        Mono<String> mono = WebClient.builder().baseUrl("https://kapi.kakao.com")
                .build()
                .post()
                .uri("/v2/user/me")
                .header("Authorization", "Bearer " + token)
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .exchangeToMono(response -> response.bodyToMono(String.class));

        JSONObject info = new JSONObject(mono.block());

        JSONObject kakaoAccount = info.getJSONObject("kakao_account");

        long kakaoId = info.getLong("id");
        String nickName = kakaoAccount.getJSONObject("profile").getString("nickname");

        if (!userRepository.existsByKakaoId(kakaoId)) {
            String email = kakaoAccount.getString("email");
            int ageRange = Integer.parseInt(kakaoAccount.getString("age_range").split("~")[0]);
            String gender = kakaoAccount.getString("gender");

            User user = User.builder()
                    .kakaoId(kakaoId)
                    .nickName(nickName)
                    .email(email)
                    .ageRange(ageRange)
                    .gender(gender)
                    .build();
            userRepository.save(user);


        }
        User user = userRepository.findByKakaoId(kakaoId);
        String userObjectId = user.getId();
        TokenResDto result = createToken(nickName, userObjectId);

        System.out.println(userObjectId);
        System.out.println(result.getGrantType());
        System.out.println(result.getAccessToken());
        System.out.println(result.getRefreshToken());
        System.out.println(result.getAccessTokenExpiresIn());

        return nickName;
    }

    // 토큰 생성
    public TokenResDto createToken(String nickName, String objectId) {

        Authentication authentication = new UsernamePasswordAuthenticationToken(objectId, "", null);
        return jwtTokenProvider.generateToken(authentication);
    }
}