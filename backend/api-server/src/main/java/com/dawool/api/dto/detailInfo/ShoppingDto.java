package com.dawool.api.dto.detailInfo;

/**
 * 쇼핑(38) 관련 정보
 *
 * @author 김정은
 */

public class ShoppingDto extends CommonInfoDto{

    // 유모차 대여 여부
    private boolean chkbabycarriageshopping;
    // 신용카드 가능 여부
    private boolean chkcreditcardshopping;
    // 애완동물 동반 여부
    private boolean chkpetshopping;
    // 장서는 날
    private String fairday;
    // 문의 및 안내
    private String infocentershopping;
    // 영업시간
    private String opentime;
    // 주차시설
    private String parkingshopping;
    // 쉬는 날
    private String restdateshopping;
    // 화장실 시설
    private String restroom;
    // 판매 품목
    private String saleitem;
    // 매장 안내
    private String shopguide;

}
