package com.dawool.api.service;

import com.dawool.api.dto.user.MyCourseDetailDto;
import com.dawool.api.dto.user.MyCourseDto;
import com.dawool.api.dto.user.MyCourseListDto;
import com.dawool.api.entity.Course;
import com.dawool.api.entity.Spot;
import com.dawool.api.repository.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * 내 코스 관련 Service
 *
 */
@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository courseRepository;

    /**
     * 코스 조회
     *
     * @return
     */
    public List<MyCourseListDto> getMyCourse() {
        String userId = UserService.getLoginUser();

        List<Course> courseList = courseRepository.findByUserid(userId);

        List<MyCourseListDto> myCourseList = new ArrayList<>();

        for (Course course : courseList) {
            MyCourseListDto myCourseResDto = new MyCourseListDto().of(course);
            myCourseList.add(myCourseResDto);
        }

        return myCourseList;
    }

    /**
     * 폴더 생성
     *
     * @param courseName
     */
    public void createCourse(String courseName) {
        String userId = UserService.getLoginUser();
        Course course = new Course();
        JSONObject jsonObject = new JSONObject(courseName);

        course.setUserid(userId);
        course.setCoursename(jsonObject.getString("courseName"));
        course.setSpots(new ArrayList<Spot>());
        course.setMemo("");
        courseRepository.save(course);
    }

    /**
     * 코스 상세 조회
     *
     * @param courseId
     * @return
     */
    public MyCourseDto detailCourse(String courseId) {
        Course course = courseRepository.findById(courseId).orElseThrow();
        MyCourseDto myCourse = new MyCourseDto().of(course);
        return myCourse;
    }

    /**
     * 코스에 여행지 추가
     *
     * @param courseId
     * @param myCourse
     * @return
     */
    public HttpStatus addSpotToCourse(String courseId, MyCourseDetailDto myCourse) {
        String userId = UserService.getLoginUser();
        Course course = courseRepository.findById(courseId).orElseThrow();
        if (!course.getUserid().equals(userId)) {
            return HttpStatus.FORBIDDEN;
        }

        course.getSpots().add(new Spot().of(myCourse));

        courseRepository.save(course);

        return HttpStatus.OK;
    }
    // 차후 수정 내용
//    public HttpStatus modifyCourse(String courseId, String memo) {
//        String userId = getLoginUser();
//        Course course = courseRepository.findById(courseId).orElseThrow();
//        if (!course.getUserid().equals(userId)) {
//           return HttpStatus.FORBIDDEN;
//        }
//        JSONObject jsonObject = new JSONObject(memo);
//        course.setMemo(jsonObject.getString("memo"));
//
//        courseRepository.save(course);
//        return HttpStatus.OK;
//    }

    /**
     * 코스 삭제
     *
     * @param courseId
     * @return
     */
    public HttpStatus deleteCourse(String courseId) {
        String userId = UserService.getLoginUser();
        Course course = courseRepository.findById(courseId).orElseThrow();

        if (!course.getUserid().equals(userId)) {
            return HttpStatus.FORBIDDEN;
        }

        courseRepository.deleteById(courseId);
        return HttpStatus.OK;
    }

    /**
     * 여행지 삭제
     *
     * @param courseId
     * @param spotId
     * @return
     */
    public HttpStatus deleteSpot(String courseId, int spotId) {
        String userId = UserService.getLoginUser();
        Course course = courseRepository.findById(courseId).orElseThrow();

        if (!course.getUserid().equals(userId)) {
            return HttpStatus.FORBIDDEN;
        }

        List<Spot> spots = course.getSpots();
        if (spots.size() > 0) {
            spots.remove(spotId);
            course.setSpots(spots);
        }
        courseRepository.save(course);

        return HttpStatus.OK;
    }

}
