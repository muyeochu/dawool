package com.dawool.api.service;

import com.dawool.api.dto.PlaceDto;
import com.dawool.api.dto.detailInfo.CultureFacilityDto;
import com.dawool.api.entity.Barrier;
import com.dawool.api.entity.CommonInfo;
import com.dawool.api.entity.CultureFacility;
import com.dawool.api.repository.BarrierRepository;
import com.dawool.api.repository.CommonTemplate;
import com.dawool.api.repository.CultureFacilityRepository;
import com.dawool.api.repository.HeartRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * 문화시설(14) 관련 Service
 *
 * @author 김정은
 * @author 이준
 */
@Service
@Slf4j
@RequiredArgsConstructor
public class CultureFacilityService {

    private final CultureFacilityRepository cultureFacilityRepository;
    private final BarrierRepository barrierRepository;
    private final HeartRepository heartRepository;
    private final CommonTemplate commonTemplate;
    private final MongoTemplate mongoTemplate;

    /**
     * 지역 별로 문화시설(14) 목록
     *
     * @param areaCode
     * @param barrierCode
     * @param page
     * @param size
     * @return
     */
    public List<PlaceDto> getCultureFacilityList(String userId, int areaCode, String barrierCode, int page, int size) {

        String[] barrier = barrierCode.split("");

        List<CultureFacility> list = getPlaceList(areaCode, barrier, page, size);

        List<PlaceDto> cultureFacilityList = new ArrayList<>();
        for (CommonInfo cultureFacility : list) {
            boolean liked = false;
            if(!userId.equals("anonymousUser")){
                liked = heartRepository.existsBySpotidAndUserid(cultureFacility.getId(), userId);
            }
            PlaceDto place = new PlaceDto().of(cultureFacility, liked);
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
        Query query = commonTemplate.findByAreacodeAndBarrierFree(areaCode, barrierCode);
        list = mongoTemplate.find(query, CultureFacility.class);

        int startIndex = page * size;
        int endIndex = Math.min(startIndex + size, list.size());
        if(list.size() > 0 && startIndex <= list.size()) {
            return list.subList(startIndex, endIndex);
        } else{
            return new ArrayList<>();
        }
    }

    /**
     * 문화시설 상세정보 조회
     *
     * @param contentId
     * @return
     */
    public CultureFacilityDto getCultureFacilityInfo(String userId, int contentId){
        CultureFacility cultureFacility = cultureFacilityRepository.findByContentid(String.valueOf(contentId));
        Barrier barrier = barrierRepository.findByContentid(String.valueOf(contentId));

        boolean liked = false;
        if(!userId.equals("anonymousUser")){
            liked = heartRepository.existsBySpotidAndUserid(cultureFacility.getId(), userId);
        }
        return new CultureFacilityDto().of(cultureFacility, barrier, liked);
    }
}
