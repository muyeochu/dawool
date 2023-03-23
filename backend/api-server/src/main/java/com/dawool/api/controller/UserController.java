package com.dawool.api.controller;


import com.dawool.api.dto.ReissueTokenReqDto;
import com.dawool.api.dto.ReissueTokenResDto;
import com.dawool.api.dto.SurveyReqDto;
import com.dawool.api.dto.TokenResDto;
import com.dawool.api.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * 회원 controller
 *
 * @author 이준
 * @author 김정은
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    /**
     * 카카오 로그인
     *
     * @param code 카카오에서 발급한 접근 코드
     * @return 액세스토큰, 리프래시 토큰
     */
    @GetMapping("/kakao/callback")
    public ResponseEntity<?> kakaoLogin(@RequestParam("code") String code) {
        TokenResDto result = userService.getKakaoAccessToken(code);
        return ResponseEntity.ok(result);
    }

    /**
     * 액세스 토큰 재발급
     *
     * @param reissueTokenReqDto 액세스토큰 재발급 dto
     * @return 재발급된 액세스 토큰
     * @throws Exception 리프래시 토큰만료 시
     */
    @PostMapping("/token-reissue")
    public ResponseEntity<?> reissueAccessToken(@RequestBody ReissueTokenReqDto reissueTokenReqDto) throws Exception {
        ReissueTokenResDto result = userService.reissueAccessToken(reissueTokenReqDto);
        return ResponseEntity.ok(result);
    }

    /**
     * 취향설문 조사
     *
     * @param survey
     * @return
     */
    @PostMapping("/survey")
    public ResponseEntity<?> survey(@RequestBody SurveyReqDto survey){
        userService.survey(survey);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
