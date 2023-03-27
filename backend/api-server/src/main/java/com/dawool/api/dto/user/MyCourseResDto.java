package com.dawool.api.dto.user;

import com.dawool.api.entity.Course;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MyCourseResDto {

    private String courseId;
    private String courseName;

    public MyCourseResDto of(Course course) {
        return MyCourseResDto.builder()
                .courseId(course.getId())
                .courseName(course.getCoursename())
                .build();
    }
}
