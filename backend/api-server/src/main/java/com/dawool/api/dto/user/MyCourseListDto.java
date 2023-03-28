package com.dawool.api.dto.user;

import com.dawool.api.entity.Course;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 내 코스 정보
 *
 * @author 이준
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MyCourseListDto {

    private String courseId;
    private String courseName;

    /**
     * Entity -> Dto
     *
     * @param course
     * @return
     */
    public MyCourseListDto of(Course course) {
        return MyCourseListDto.builder()
                .courseId(course.getId())
                .courseName(course.getCoursename())
                .build();
    }
}
