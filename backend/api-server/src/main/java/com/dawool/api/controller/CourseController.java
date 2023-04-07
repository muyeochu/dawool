package com.dawool.api.controller;

import com.dawool.api.dto.user.MyCourseDetailDto;
import com.dawool.api.dto.user.MyCourseDto;
import com.dawool.api.dto.user.MyCourseListDto;
import com.dawool.api.service.CourseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 내 코스 관련
 *
 * @author 이준
 */
@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/user/my-course")
public class CourseController {

    private final CourseService courseService;

    /**
     * 내 코스 조회
     *
     * @return
     */
    @GetMapping("")
    public ResponseEntity<?> getMyCourse() {
        List<MyCourseListDto> myCourseList = courseService.getMyCourse();
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
    @PostMapping("")
    public ResponseEntity<?> createCourse(@RequestBody String courseName) {
        courseService.createCourse(courseName);
        List<MyCourseListDto> myCourseList = courseService.getMyCourse();
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
    @GetMapping("/{courseId}")
    public ResponseEntity<?> detailCourse(@PathVariable String courseId) {
        MyCourseDto myCourse = courseService.detailCourse(courseId);
        return ResponseEntity.ok(myCourse);
    }

    /**
     * 내 코스에 여행지 추가
     *
     * @param courseId
     * @param myCourse
     * @return
     */
    @PostMapping("/{courseId}")
    public ResponseEntity<?> addSpotToCourse(@PathVariable String courseId, @RequestBody MyCourseDetailDto myCourse) {
        HttpStatus httpStatus = courseService.addSpotToCourse(courseId, myCourse);
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
//        HttpStatus httpStatus = courseService.modifyCourse(courseId, memo);
//        return ResponseEntity.status(httpStatus).body();
//    }

    /**
     * 내 코스 삭제
     *
     * @param courseId
     * @return
     */
    @DeleteMapping("/{courseId}")
    public ResponseEntity<?> deleteCourse(@PathVariable String courseId) {
        HttpStatus httpStatus = courseService.deleteCourse(courseId);
        return ResponseEntity.status(httpStatus).body(httpStatus.getReasonPhrase());
    }

    /**
     * 내 코스 여행지 삭제
     *
     * @param courseId
     * @param spotId
     * @return
     */
    @DeleteMapping("/{courseId}/{spotId}")
    public ResponseEntity<?> deleteSpot(@PathVariable String courseId, @PathVariable int spotId) {
        HttpStatus httpStatus = courseService.deleteSpot(courseId, spotId);
        return ResponseEntity.status(httpStatus).body(httpStatus.getReasonPhrase());
    }
}
