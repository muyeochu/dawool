package com.dawool.api.entity;


import lombok.Getter;
import lombok.Setter;

/**
 * 식당(39) 정보
 *
 * @author 김정은
 */
@Getter
@Setter
public class Restaurant extends CommonInfo {

    // 신용카드 가능 여부
    private int chkcreditcardfood;
    // 대표메뉴
    private String firstmenu;
    // 문의 및 안내
    private String infocenterfood;
    // 어린이 놀이방 시설 여부
    private float kidsfacility;
    // 영업시간
    private String opentimefood;
    // 포장 가능 여부
    private String packing;
    // 주차시설
    private String parkingfood;
    // 예약 안내
    private String reservationfood;
    // 쉬는 날
    private String restdatefood;
    // 판매 메뉴
    private String treatmenu;

}
