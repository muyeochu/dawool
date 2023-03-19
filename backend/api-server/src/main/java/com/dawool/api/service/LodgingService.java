package com.dawool.api.service;

import com.dawool.api.dto.PlaceDto;
import com.dawool.api.entity.CommonInfo;
import com.dawool.api.entity.CultureFacility;
import com.dawool.api.entity.Lodging;
import com.dawool.api.repository.CultureFacilityRepository;
import com.dawool.api.repository.LodgingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 숙박(32) 관련 Service
 *
 * @author 김정은
 */
@Service
@Slf4j
@RequiredArgsConstructor
public class LodgingService {

    private final LodgingRepository lodgingRepository;

    /**
     * 지역 별로 숙박(32) 목록
     *
     * @param areaCode
     * @param barrierCode
     * @param page
     * @param size
     * @return
     */
    public List<PlaceDto> getLodgingList(int areaCode, String barrierCode, int page, int size) {

        String[] barrier = barrierCode.split("");

        List<Lodging> list = getPlaceList(areaCode, barrier, page, size);

        List<PlaceDto> lodgingList = new ArrayList<>();
        for (CommonInfo lodging : list) {
            PlaceDto place = new PlaceDto().of(lodging);
            lodgingList.add(place);
        }
        return lodgingList;
    }

    /**
     * 무장애 필터링
     *
     * @param areaCode
     * @param barrierCode
     * @param page
     * @param size
     * @return
     */
    public List<Lodging> getPlaceList(int areaCode, String[] barrierCode, int page, int size) {
        List<Lodging> list;
        if (barrierCode[0].equals("1")) {
            list = lodgingRepository
                    .findByAreacodeAndDeaf(String.valueOf(areaCode), "1");
        } else {
            list = lodgingRepository
                    .findByAreacode(String.valueOf(areaCode));
        }

        // 시각장애
        if (barrierCode[1].equals("1")) {
            list = list.stream().filter(o -> o.getVisually_impaired() == 1)
                    .collect(Collectors.toList());
        }
        // 지체장애
        if (barrierCode[2].equals("1")) {
            list = list.stream().filter(o -> o.getMobility_weak() == 1)
                    .collect(Collectors.toList());
        }
        // 노인
        if (barrierCode[3].equals("1")) {
            list = list.stream().filter(o -> o.getOld() == 1)
                    .collect(Collectors.toList());
        }
        // 영유아
        if (barrierCode[4].equals("1")) {
            list = list.stream().filter(o -> o.getInfant() == 1)
                    .collect(Collectors.toList());
        }

        int startIndex = page * size;
        int endIndex = Math.min(startIndex + size, list.size());
        if(list.size() > 0 && startIndex <= list.size()) {
            return list.subList(startIndex, endIndex);
        } else{
            return new ArrayList<>();
        }
    }
}
