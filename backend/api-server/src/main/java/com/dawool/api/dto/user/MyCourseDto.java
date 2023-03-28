package com.dawool.api.dto.user;

import com.dawool.api.entity.Course;
import com.dawool.api.entity.Spot;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

/**
 * 내 코스 상세정보
 *
 * @author 이준
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MyCourseDto {
    private String courseName;
    private List<MyCourseDetailDto> course;
    private String memo;

    /**
     * Entity -> Dto
     *
     * @param course
     * @return
     */
    public MyCourseDto of(Course course) {
        List<MyCourseDetailDto> myCourseDetail = new ArrayList<>();
        for (Spot spot: course.getSpots()) {
            myCourseDetail.add(new MyCourseDetailDto().of(spot));
        }
        return MyCourseDto.builder()
                .courseName(course.getCoursename())
                .course(myCourseDetail)
                .memo(course.getMemo())
                .build();
    }
}
