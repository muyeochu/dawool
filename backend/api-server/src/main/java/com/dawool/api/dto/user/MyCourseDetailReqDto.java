package com.dawool.api.dto.user;

import com.dawool.api.entity.Spot;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MyCourseDetailReqDto {
    private int contentId;
    private String title;
    private float mapX;
    private float mapY;

    public Spot of(MyCourseDetailReqDto myCourse) {
        return Spot.builder()
                .contentid(myCourse.getContentId())
                .title(myCourse.getTitle())
                .mapx(myCourse.getMapX())
                .mapy(myCourse.getMapY())
                .build();
    }
}
