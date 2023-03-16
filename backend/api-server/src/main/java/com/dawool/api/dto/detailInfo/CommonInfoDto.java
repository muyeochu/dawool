package com.dawool.api.dto.detailInfo;

/**
 *  관광정보의 공통적으로 존재하는 정보
 *
 * @author 김정은
 */

public class CommonInfoDto {

    // 관광지의 고유번호
    private int contentid;
    // 관광지 타입
    // 12: 관광지 14: 문화시설 15: 축제공연 25: 여행코스 28: 레포츠 32: 숙박 38: 쇼핑 39: 음식점
//    private int contenttypeid;
    private String title;
    // 소분류
    private String category;
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
    private int mapx;
    // 위도
    private int mapy;
    // 지도 레벨
    private int mlevel;
    // 조회수
    private int hit;
}
