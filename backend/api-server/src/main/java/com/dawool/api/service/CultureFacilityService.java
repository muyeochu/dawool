package com.dawool.api.service;

import com.dawool.api.code.Category;
import com.dawool.api.dto.PlaceDto;
import com.dawool.api.entity.CommonInfo;
import com.dawool.api.entity.CultureFacility;
import com.dawool.api.repository.CultureFacilityRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class CultureFacilityService {

    private final CultureFacilityRepository cultureFacilityRepository;

    /**
     * 지역 별로 문화시설(14) 목록
     *
     * @param areaCode
     * @param barrierCode
     * @param page
     * @param size
     * @return
     */
    public List<PlaceDto> getCultureFacilityList(int areaCode, String barrierCode, int page, int size) {

        String[] barrier = barrierCode.split("");

        List<CultureFacility> list = getPlaceList(areaCode, barrier, page, size);

        List<PlaceDto> cultureFacilityList = new ArrayList<>();
        for (CommonInfo cultureFacility : list) {
            PlaceDto place = new PlaceDto().of(cultureFacility);
            cultureFacilityList.add(place);
        }
        return cultureFacilityList;
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
    public List<CultureFacility> getPlaceList(int areaCode, String[] barrierCode, int page, int size) {
        List<CultureFacility> list;
        if (barrierCode[0].equals("1")) {
            list = cultureFacilityRepository
                    .findByAreacodeAndDeaf(String.valueOf(areaCode), "1");
        } else {
            list = cultureFacilityRepository
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
