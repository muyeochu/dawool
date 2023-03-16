package com.dawool.api.entity;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Entertainment")
public class Entertainment extends CommonInfo {

    // 유모차 대여 가능 여부
    private boolean chkbabycarriage;
    // 애완동물 동반 여부
    private boolean chkpet;
    // 체험 가능 연령
    private String expagerange;
    // 체험 안내
    private String expguide;
    // 세계문화유산유무
    private boolean heritage1;
    // 세계자연유산유무
    private boolean heritage2;
    // 세계기록유산유무
    private boolean heritage3;
    // 문의 및 안내
    private String infocenter;
    // 주차시설
    private String parking;
    // 쉬는 날
    private String restdate;
    // 이용 시기
    private String useseason;
    // 이용 기간
    private String usetime;
}
