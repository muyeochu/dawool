package com.dawool.api.dto;

/**
 * 관광지, 숙박, 식당 공통
 * 장소 목록 DTO
 *
 * @author 김정은
 */

public class PlaceDto {

    // ObjectId
    private String spotId;
    private String contentId;
    // 분류
    private String contentTypeId;
    // 제목
    private String title;
    // 소분류
    private String category;
    private boolean isLiked;

}
