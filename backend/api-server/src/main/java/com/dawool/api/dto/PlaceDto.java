package com.dawool.api.dto;

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
    private int deaf;
    private int visuallyImpaired;
    private int mobilityWeak;
    private int old;
    private int infant;
    private boolean isLiked;

}
