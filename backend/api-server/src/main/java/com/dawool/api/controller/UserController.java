package com.dawool.api.controller;


import com.dawool.api.dto.ReissueTokenReqDto;
import com.dawool.api.dto.ReissueTokenResDto;
import com.dawool.api.dto.TokenResDto;
import com.dawool.api.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;
    // 카카오 로그인
    @GetMapping("/kakao/callback")
    public ResponseEntity<?> kakaoLogin(@RequestParam("code") String code) {
        TokenResDto result = userService.getKakaoAccessToken(code);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/test")
    public ResponseEntity<?> tokenTest() throws Exception {
        userService.getLoginUser();

        return ResponseEntity.ok("TEST COMPLETE");
    }

    @PostMapping("/token-reissue")
    public ResponseEntity<?> reissueAccessToken(@RequestBody ReissueTokenReqDto reqDto) throws Exception {
        ReissueTokenResDto result = userService.reissueAccessToken(reqDto);
        return ResponseEntity.ok(result);
    }
}
