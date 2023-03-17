package com.dawool.api.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

/**
 * 공통정보 Entity
 *
 * @author 김정은
 */

@Getter
@Setter
public class CommonInfo {

    @Id
    private String id;

    // 관광지의 고유번호
    private int contentid;
    // 관광지 타입
    // 12: 관광지 14: 문화시설 15: 축제공연 25: 여행코스 28: 레포츠 32: 숙박 38: 쇼핑 39: 음식점
    private int contenttypeid;
    private String title;
    // 소분류
    private String cat3;
    // URL
    private String homepage;
    // 대표 이미지
    private String firstimage;
    private String firstimage2;
    // 지역 코드(특별시/광역시/도)
    private int areacode;
    // 도로명 주소
    private String addr1;
    private String addr2;
    // 경도
    private float mapx;
    // 위도
    private float mapy;
    // 지도 레벨
    private float mlevel;
    // 청각장애
    private int deaf;
    // 시각장애
    private int visually_impaired;
    // 지체장애
    private int mobility_weak;
    // 노인
    private int old;
    // 영유아
    private int infant;
    // 조회수
    private int hit;
}
