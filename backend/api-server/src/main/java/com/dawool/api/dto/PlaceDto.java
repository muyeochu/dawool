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
public class PlaceDto extends SearchDto{
    private boolean isLiked;

    @Builder
    public PlaceDto(String spotId, int contentId, int contentTypeId, String title, String imageUrl, String category,
                    int mobilityWeak, int visuallyImpaired, int deaf, int old, int infant, boolean isLiked) {
        super(spotId, contentId, contentTypeId, title, imageUrl, category, mobilityWeak, visuallyImpaired, deaf, old, infant);
        this.isLiked = isLiked;
    }

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
                .imageUrl(info.getFirstimage().equals("0") ? info.getFirstimage2() : info.getFirstimage())
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
