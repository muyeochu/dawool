package com.dawool.api.entity;

import com.dawool.api.dto.user.MyCourseDetailDto;
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
public class Spot {
    private int contentid;
    private int contenttypeid;
    private String title;
    private double mapx;
    private double mapy;

    /**
     * Dto -> Entity
     *
     * @param myCourseDetailDto
     * @return
     */
    public Spot of(MyCourseDetailDto myCourseDetailDto) {
        return Spot.builder()
                .contentid(myCourseDetailDto.getContentId())
                .contenttypeid(myCourseDetailDto.getContentTypeId())
                .title(myCourseDetailDto.getTitle())
                .mapx(Double.parseDouble(myCourseDetailDto.getMapX()))
                .mapy(Double.parseDouble(myCourseDetailDto.getMapY()))
                .build();
    }
}
