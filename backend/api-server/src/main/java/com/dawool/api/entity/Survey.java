package com.dawool.api.entity;

import com.dawool.api.code.Area;
import com.dawool.api.dto.SurveyReqDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 취향설문 Entity
 *
 * @author 김정은
 */

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Survey {

    private String barrier;
    private double[] departure;
    private String preferredTime;
    private String densePopulation;
    private String[] visitLocation;

    public Survey of(SurveyReqDto dto){
        return Survey.builder()
                .barrier(dto.getBarrier())
                .densePopulation(dto.getDensePopulation())
                .departure(Area.getCoordi("A" + dto.getDeparture()))
                .preferredTime(dto.getPreferredTime())
                .visitLocation(dto.getVisitLocation())
                .build();
    }

}
