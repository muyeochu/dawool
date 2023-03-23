package com.dawool.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 취향설문 DTO
 *
 * @author 김정은
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SurveyReqDto {

    private String barrier;
    private String departure;
    private String preferredTime;
    private String densePopulation;
    private String[] visitLocation;

}
