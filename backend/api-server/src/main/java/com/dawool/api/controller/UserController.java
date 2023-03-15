package com.dawool.api.controller;


import com.dawool.api.service.UserService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;
    // 카카오 로그인
    @GetMapping("/kakao/callback")
    public Map<String, String> kakaoLogin(@RequestParam("code") String code) {
        Map<String, String> result = userService.getKakaoAccessToken(code);
        return result;
    }

    @GetMapping("/test")
    public ResponseEntity<?> tokenTest() {
        return ResponseEntity.ok("TEST COMPLETE");
    }
}
