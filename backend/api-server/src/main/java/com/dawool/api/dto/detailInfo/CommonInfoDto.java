package com.dawool.api.dto.detailInfo;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 *  관광정보의 공통적으로 존재하는 정보
 *
 * @author 김정은
 */

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CommonInfoDto {

    // 관광지의 고유번호
    private int contentId;
    // 관광지 타입
    // 12: 관광지 14: 문화시설 15: 축제공연 25: 여행코스 28: 레포츠 32: 숙박 38: 쇼핑 39: 음식점
//    private int contenttypeid;
    private String title;
    // 소분류
    private String category;
    // URL
    private String homepage;
    // 대표 이미지
    private String firstImage;
    private String firstImage2;
    // 지역 코드(특별시/광역시/도)
    private int areaCode;
    // 도로명 주소
    private String addr1;
    private String addr2;
    // 경도
    private float mapX;
    // 위도
    private float mapY;
    // 지도 레벨
    private float mLevel;
    // 청각장애
    private int deaf;
    // 시각장애
    private int visuallyImpaired;
    // 지체장애
    private int mobilityWeak;
    // 노인
    private int old;
    // 영유아
    private int infant;
    private boolean isLiked;
    // 조회수
    private int hit;

    // 무장애 정보
    private String parking;
    private String route;
    private String publicTransport;
    private String ticketOffice;
    private String promotion;
    private String wheelchair;
    private String exit;
    private String elevator;
    private String restroom;
    private String auditorium;
    private String room;
    private String handicapEtc;
    private String braileBlock;
    private String helpDog;
    private String guideHuman;
    private String audioGuide;
    private String bigPrint;
    private String brailePromotion;
    private String guideSystem;
    private String blindHandicapEtc;
    private String signGuide;
    private String videoGuide;
    private String hearingRoom;
    private String hearingHandicapEtc;
    private String stroller;
    private String lactationRoom;
    private String babySpareChair;
    private String infantsFamilyEtc;

}
