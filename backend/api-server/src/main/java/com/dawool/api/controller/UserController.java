package com.dawool.api.controller;


import com.dawool.api.dto.user.MyCourseDetailReqDto;
import com.dawool.api.dto.user.MyCourseResDto;
import com.dawool.api.dto.user.ReissueTokenReqDto;
import com.dawool.api.dto.user.ReissueTokenResDto;
import com.dawool.api.dto.user.TokenResDto;
import com.dawool.api.dto.SurveyReqDto;
import com.dawool.api.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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


    /**
     * 내 코스 조회
     * 
     * @return
     */
    @GetMapping("/my-course")
    public ResponseEntity<?> getMyCourse() {
        List<MyCourseResDto> mycourseList = userService.getMyCourse();
        return ResponseEntity.ok(mycourseList);
    }

    /**
     * 내 코스 폴더 추가
     * 
     * @param courseName
     * @return
     */
    @PostMapping("/my-course")
    public ResponseEntity<?> createCourse(@RequestBody String courseName) {
        userService.createCourse(courseName);
        return ResponseEntity.ok(HttpStatus.OK);
    }


    @PostMapping("/my-course/{courseId}")
    public ResponseEntity<?> addSpotToCourse(@PathVariable String courseId, @RequestBody MyCourseDetailReqDto myCourse) {
        HttpStatus httpStatus = userService.addSpotToCourse(courseId, myCourse);
        return ResponseEntity.status(httpStatus).body(httpStatus.getReasonPhrase());
    }

    @PutMapping("/my-course/{courseId}")
    public ResponseEntity<?> modifyCourse(@PathVariable String courseId, @RequestBody String a) {

        return null;
    }

    @DeleteMapping("/my-course/{courseId}")
    public ResponseEntity<?> deleteCourse(@PathVariable String courseId) {

        return null;
    }
}
