package com.dawool.api.service;

import com.dawool.api.dto.SurveyReqDto;
import com.dawool.api.dto.user.ReissueTokenReqDto;
import com.dawool.api.dto.user.ReissueTokenResDto;
import com.dawool.api.dto.user.TokenResDto;
import com.dawool.api.entity.Survey;
import com.dawool.api.entity.User;
import com.dawool.api.error.CustomException;
import com.dawool.api.error.ErrorCode;
import com.dawool.api.jwt.JwtTokenProvider;
import com.dawool.api.repository.UserRepository;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Date;

/**
 * 회원 Service
 *
 * @author 이준
 * @author 김정은
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;
    @Value("${kakao.restapi.key}")
    private String kakaoAPIKey;

    /**
     * 카카오로부터 액세스 토큰 발급.
     *
     * @param code
     * @return TokenResDto
     */
    public TokenResDto getKakaoAccessToken(String code) {
        String accessToken = "";
        String refreshToken = "";
        String redirectURI = "https://j8d105.p.ssafy.io/callback";

        MultiValueMap<String, String> data = new LinkedMultiValueMap<>();
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
                .exchangeToMono(response -> response.bodyToMono(String.class));

        JSONObject info = new JSONObject(mono.block());

        if(!info.has("access_token")) {
            log.error(info.toString());
            throw new CustomException(ErrorCode.INTER_SERVER_ERROR);
        }

        accessToken = info.getString("access_token");

        TokenResDto resDto = this.getKakaoUserInfoByToken(accessToken);
        log.info(resDto.getAccessToken());
        log.info(resDto.getRefreshToken());

        return resDto;
    }

    /**
     * 토큰으로 카카오 회원정보 확인 후 DB에 저장.
     *
     * @param token
     * @return TokenResDto
     */
    public TokenResDto getKakaoUserInfoByToken(String token) {
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
        TokenResDto result = this.createToken(userObjectId);
        user.setRefreshToken(result.getRefreshToken());
        userRepository.save(user);
        result.setNickName(user.getNickName());

        // 취향설문 조사 여부
        result.setSurveyed(user.getSurvey() != null);

        return result;
    }

    /**
     * 토큰 생성
     *
     * @param objectId 유저 ObjectId
     * @return TokenResDto
     */
    public TokenResDto createToken(String objectId) {

        Authentication authentication = new UsernamePasswordAuthenticationToken(objectId, "", null);
        TokenResDto result = jwtTokenProvider.generateToken(authentication);
        return result;
    }

    /**
     * 액세스 토큰 재발급
     *
     * @param reqDto
     * @return 액세스 토큰
     */
    public ReissueTokenResDto reissueAccessToken(ReissueTokenReqDto reqDto) throws Exception {
        String grantType = reqDto.getGrantType();
        String refreshToken = reqDto.getRefreshToken();
        Claims claims = jwtTokenProvider.validateToken(refreshToken);
        String accessToken = null;

        if (grantType.equals("refreshToken") && claims != null) {
            User user = userRepository.findById(claims.getSubject()).orElseThrow();
            if (user.getRefreshToken().equals(refreshToken)) {
                accessToken = jwtTokenProvider.createAccessToken(user.getId(), new Date().getTime());
            }
        }

        return ReissueTokenResDto.builder()
                .grantType("accessToken")
                .accessToken(accessToken)
                .build();
    }

    /**
     * 로그인된 유저 정보 조회
     *
     * @return 로그인된 유저 정보 objectId
     */
    public static String getLoginUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        return authentication.getName();
    }

    /**
     * 취향 설문 저장
     *
     * @param survey 설문조사 정보
     */
    public void survey(SurveyReqDto survey) {
        String userId = UserService.getLoginUser();

        // 무장애정보
        String mobilityWeak = "0", visualImpaired = "0", deaf = "0", old = "0", infant = "0";
        if (survey.getBarrier().contains("2")) {
            mobilityWeak = "1";
        }
        if (survey.getBarrier().contains("3")) {
            visualImpaired = "1";
        }
        if (survey.getBarrier().contains("4")) {
            deaf = "1";
        }
        if (survey.getBarrier().contains("5")) {
            old = "1";
        }
        if (survey.getBarrier().contains("6")) {
            infant = "1";
        }
        survey.setBarrier(mobilityWeak + deaf + visualImpaired + old + infant);

        User user = userRepository.findById(userId).orElseThrow();
        user.setSurvey(new Survey().of(survey));
        userRepository.save(user);

    }
}