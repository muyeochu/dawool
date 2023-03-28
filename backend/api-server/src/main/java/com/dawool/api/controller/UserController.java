package com.dawool.api.controller;


import com.dawool.api.dto.user.MyCourseDetailDto;
import com.dawool.api.dto.user.MyCourseDto;
import com.dawool.api.dto.user.MyCourseListDto;
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

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
        List<MyCourseListDto> myCourseList = userService.getMyCourse();
        Map<String, List<MyCourseListDto>> myCourse = new HashMap<>();
        myCourse.put("myCourse",myCourseList);
        return ResponseEntity.ok(myCourse);
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
        List<MyCourseListDto> myCourseList = userService.getMyCourse();
        Map<String, List<MyCourseListDto>> myCourse = new HashMap<>();
        myCourse.put("myCourse",myCourseList);
        return ResponseEntity.ok(myCourse);
    }

    /**
     * 내 코스 상세조회
     * 
     * @param courseId
     * @return
     */
    @GetMapping("/my-course/{courseId}")
    public ResponseEntity<?> detailCourse(@PathVariable String courseId) {
        MyCourseDto myCourse = userService.detailCourse(courseId);
        return ResponseEntity.ok(myCourse);
    }

    /**
     * 내 코스에 여행지 추가
     *
     * @param courseId
     * @param myCourse
     * @return
     */
    @PostMapping("/my-course/{courseId}")
    public ResponseEntity<?> addSpotToCourse(@PathVariable String courseId, @RequestBody MyCourseDetailDto myCourse) {
        HttpStatus httpStatus = userService.addSpotToCourse(courseId, myCourse);
        return ResponseEntity.status(httpStatus).body(httpStatus.getReasonPhrase());
    }
    // 차후 수정 내용
//    /**
//     * 내 코스 수정
//     *
//     * @param courseId
//     * @param memo
//     * @return
//     */
//    @PutMapping("/my-course/{courseId}")
//    public ResponseEntity<?> modifyCourseMemo(@PathVariable String courseId, @RequestBody String memo) {
//        HttpStatus httpStatus = userService.modifyCourse(courseId, memo);
//        return ResponseEntity.status(httpStatus).body();
//    }

    /**
     * 내 코스 삭제
     *
     * @param courseId
     * @return
     */
    @DeleteMapping("/my-course/{courseId}")
    public ResponseEntity<?> deleteCourse(@PathVariable String courseId) {
        HttpStatus httpStatus = userService.deleteCourse(courseId);
        return ResponseEntity.status(httpStatus).body(httpStatus.getReasonPhrase());
    }

    /**
     * 내 코스 여행지 삭제
     *
     * @param courseId
     * @param spotId
     * @return
     */
    @DeleteMapping("/my-course/{courseId}/{spotId}")
    public ResponseEntity<?> deleteSpot(@PathVariable String courseId, @PathVariable int spotId) {
        HttpStatus httpStatus = userService.deleteSpot(courseId, spotId);
        return ResponseEntity.status(httpStatus).body(httpStatus.getReasonPhrase());
    }
}
