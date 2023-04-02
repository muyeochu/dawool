package com.dawool.api.dto;

import com.dawool.api.code.Category;
import com.dawool.api.entity.CommonInfo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 관광지, 숙박, 식당 공통
 * 장소 목록 DTO
 *
 * @author 김정은
 * @author 이준
 */

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PlaceDto {

    // ObjectId
    private String spotId;
    private int contentId;
    // 분류
    private int contentTypeId;
    // 제목
    private String title;
    // 이미지 경로
    private String imageUrl;
    // 소분류
    private String category;
    private int mobilityWeak;
    private int visuallyImpaired;
    private int deaf;
    private int old;
    private int infant;
    private boolean isLiked;

    /**
     * CommonInfo Entity -> PlaceDto
     *
     * @param info
     * @return
     */
    public PlaceDto of(CommonInfo info, boolean liked){
        return PlaceDto.builder()
                .spotId(info.getId())
                .contentId(info.getContentid())
                .contentTypeId(info.getContenttypeid())
                .title(info.getTitle())
                .imageUrl(info.getFirstimage())
                .category(Category.valueOf(info.getCat3()).getCategory())
                .mobilityWeak(info.getMobility_weak())
                .visuallyImpaired(info.getVisual_impaired())
                .deaf(info.getDeaf())
                .old(info.getOld())
                .infant(info.getInfant())
                .isLiked(liked)
                .build();
    }

}
