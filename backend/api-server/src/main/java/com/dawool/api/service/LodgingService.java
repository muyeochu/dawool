package com.dawool.api.service;

import com.dawool.api.dto.PlaceDto;
import com.dawool.api.dto.detailInfo.LodgingDto;
import com.dawool.api.entity.Barrier;
import com.dawool.api.entity.CommonInfo;
import com.dawool.api.entity.Lodging;
import com.dawool.api.repository.BarrierRepository;
import com.dawool.api.repository.CommonTemplate;
import com.dawool.api.repository.LodgingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
    private final BarrierRepository barrierRepository;
    private final CommonTemplate commonTemplate;
    private final MongoTemplate mongoTemplate;

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
        Query query = commonTemplate.findByAreacodeAndBarrierFree(areaCode, "", barrierCode);
        list = mongoTemplate.find(query, Lodging.class);

        int startIndex = page * size;
        int endIndex = Math.min(startIndex + size, list.size());
        if(list.size() > 0 && startIndex <= list.size()) {
            return list.subList(startIndex, endIndex);
        } else{
            return new ArrayList<>();
        }
    }

    /**
     * 숙박 상세정보 조회
     *
     * @param contentId
     * @return
     */
    public LodgingDto getLodgingInfo(int contentId){
        Lodging lodging = lodgingRepository.findByContentid(String.valueOf(contentId));
        Barrier barrier = barrierRepository.findByContentid(String.valueOf(contentId));

        return new LodgingDto().of(lodging, barrier);
    }
}
