package com.dawool.api.controller;


import com.dawool.api.dto.ReissueTokenReqDto;
import com.dawool.api.dto.TokenResDto;
import com.dawool.api.service.UserService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

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
    public ResponseEntity<?> tokenTest() {
        return ResponseEntity.ok("TEST COMPLETE");
    }

    @PostMapping("/token-reissue")
    public ResponseEntity<?> reissueAccessToken(@RequestBody ReissueTokenReqDto reqDto) {
        userService.reissueAccessToken(reqDto);
        return null;
    }
}
