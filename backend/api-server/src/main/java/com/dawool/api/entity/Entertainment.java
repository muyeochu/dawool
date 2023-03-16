package com.dawool.api.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "entertainment")
public class Entertainment extends CommonInfo {

    // 유모차 대여 가능 여부
    private int chkbabycarriage;
    // 애완동물 동반 여부
    private int chkpet;
    // 체험 가능 연령
    private String expagerange;
    // 체험 안내
    private String expguide;
    // 세계문화유산유무
    private float heritage1;
    // 세계자연유산유무
    private float heritage2;
    // 세계기록유산유무
    private float heritage3;
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
