package com.dawool.api.dto;

import com.dawool.api.code.Category;
import com.dawool.api.entity.CommonInfo;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SearchDto {
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
    private int deaf;
    private int visuallyImpaired;
    private int mobilityWeak;
    private int old;
    private int infant;
    private boolean isLiked;

    /**
     * CommonInfo Entity -> PlaceDto
     *
     * @param info
     * @return
     */
    public PlaceDto of(CommonInfo info){
        return PlaceDto.builder()
                .spotId(info.getId())
                .contentId(info.getContentid())
                .contentTypeId(info.getContenttypeid())
                .title(info.getTitle())
                .imageUrl(info.getFirstimage())
                .category(Category.valueOf(info.getCat3()).getCategory())
                .deaf(info.getDeaf())
                .visuallyImpaired(info.getVisually_impaired())
                .mobilityWeak(info.getMobility_weak())
                .old(info.getOld())
                .infant(info.getInfant())
                .isLiked(false)
                .build();
    }
}
