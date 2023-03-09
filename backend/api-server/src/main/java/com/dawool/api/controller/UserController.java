package com.dawool.api.controller;


import com.dawool.api.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;
    // 카카오 로그인
    @GetMapping("/kakao")
    public Map<String, String> kakaoLogin(@RequestParam("code") String code) {
        Map<String, String> result = userService.getKakaoAccessToken(code);
        return result;
    }

    @GetMapping("/kakao/userinfo")
    public void userInfo() {
        System.out.println("KAKAO INFO");
        userService.getUserInfoByToken();
    }
}
