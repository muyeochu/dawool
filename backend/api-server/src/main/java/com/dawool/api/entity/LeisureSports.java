package com.dawool.api.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * 레포츠(28) 관련 정보
 *
 * @author 김정은
 */

@Getter
@Setter
@Document(collection = "leisure_sports")
public class LeisureSports extends CommonInfo {

    // 수용인원
    private String accomcountleports;
    // 유모차 대여 여부
    private float chkbabycarriageleports;
    // 애완동물 동반 여부
    private float chkpetleports;
    // 체험 연령
    private String expagerangeleports;
    // 문의 및 안내
    private String infocenterleports;
    // 개장기간
    private String openperiod;
    // 주차요금
    private String parkingfeeleports;
    // 주차시설
    private String parkingleports;
    // 예약안내
    private String reservation;
    // 쉬는 날
    private String restdateleports;
    // 이용 요금
    private String usefeeleports;
    // 운영 시간
    private String usetimeleports;
}
