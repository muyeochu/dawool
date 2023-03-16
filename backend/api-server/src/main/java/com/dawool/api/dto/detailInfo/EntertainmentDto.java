package com.dawool.api.dto.detailInfo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 관광지 (12) 정보
 *
 * @author 김정은
 */

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EntertainmentDto extends CommonInfoDto{

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
    // 개장시간
    private String opendate;
    // 주차시설
    private String parking;
    // 쉬는 날
    private String restdate;
    // 이용 시기
    private String useseason;
    // 이용 기간
    private String usetime;

}
