package com.dawool.api.dto;

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
public class HeartReqDto {

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

}
