package com.dawool.api.dto;

import com.dawool.api.code.Category;
import com.dawool.api.entity.CommonInfo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

/**
 * 검색 결과 Dto
 *
 * @author 김정은
 * @author 이준
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
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
                .imageUrl(info.getFirstimage().equals("0") ? info.getFirstimage2() : info.getFirstimage())
                .category(Category.valueOf(info.getCat3()).getCategory())
                .deaf(info.getDeaf())
                .visuallyImpaired(info.getVisual_impaired())
                .mobilityWeak(info.getMobility_weak())
                .old(info.getOld())
                .infant(info.getInfant())
                .build();
    }
}
