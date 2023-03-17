package com.dawool.api.controller;


import com.dawool.api.dto.user.ReissueTokenReqDto;
import com.dawool.api.dto.user.ReissueTokenResDto;
import com.dawool.api.dto.user.TokenResDto;
import com.dawool.api.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * 회원 controller
 *
 * @author 이준
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
     *
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
}
