package com.dawool.api.dto.user;

import com.dawool.api.entity.Spot;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 여행지 정보
 *
 * @author 이준
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MyCourseDetailDto {
    private int contentId;
    private int contentTypeId;
    private String title;
    private String mapX;
    private String mapY;

    /**
     * Entity -> Dto
     *
     * @param spot
     * @return
     */
    public MyCourseDetailDto of(Spot spot){
        return MyCourseDetailDto.builder()
                .contentId(spot.getContentid())
                .contentTypeId(spot.getContenttypeid())
                .title(spot.getTitle())
                .mapX(String.valueOf(spot.getMapx()))
                .mapY(String.valueOf(spot.getMapy()))
                .build();
    }
}
