package com.dawool.api.service;

import com.dawool.api.dto.PlaceDto;
import com.dawool.api.dto.detailInfo.EntertainmentDto;
import com.dawool.api.entity.Barrier;
import com.dawool.api.entity.CommonInfo;
import com.dawool.api.entity.Entertainment;
import com.dawool.api.repository.BarrierRepository;
import com.dawool.api.repository.CommonTemplate;
import com.dawool.api.repository.EntertainmentRepository;
import com.dawool.api.repository.HeartRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * 장소와 관련된 Service
 *
 * @author 김정은
 * @author 이준
 */

@Service
@RequiredArgsConstructor
@Slf4j
public class EntertainmentService {

    private final EntertainmentRepository entertainmentRepository;
    private final BarrierRepository barrierRepository;
    private final HeartRepository heartRepository;
    private final CommonTemplate commonTemplate;
    private final MongoTemplate mongoTemplate;

    /**
     * 지역 별로 관광지(12) 목록
     *
     * @param areaCode
     * @param barrierCode
     * @param page
     * @param size
     * @return
     */
    public List<PlaceDto> getEntertainmentList(String userId, int areaCode, String barrierCode, int page, int size) {

        String[] barrier = barrierCode.split("");

        List<Entertainment> list = getPlaceList(areaCode, barrier, page, size);

        List<PlaceDto> entertainmentList = new ArrayList<>();
        for (CommonInfo entertainment : list) {
            boolean liked = false;
            if(!userId.equals("anonymousUser")){
                liked = heartRepository.existsBySpotidAndUserid(entertainment.getId(), userId);
            }
            PlaceDto place = new PlaceDto().of(entertainment, liked);
            entertainmentList.add(place);
        }
        return entertainmentList;
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
    public List<Entertainment> getPlaceList(int areaCode, String[] barrierCode, int page, int size) {
        List<Entertainment> list;
        Query query = commonTemplate.findByAreacodeAndBarrierFree(areaCode, barrierCode);
        list = mongoTemplate.find(query, Entertainment.class);

        int startIndex = page * size;
        int endIndex = Math.min(startIndex + size, list.size());
        if(list.size() > 0 && startIndex <= list.size()) {
            return list.subList(startIndex, endIndex);
        } else{
            return new ArrayList<>();
        }
    }

    /**
     * 관광지 상세정보 조회
     *
     * @param contentId
     * @return
     */
    public EntertainmentDto getEntertainmentInfo(String userId, int contentId){
        Entertainment entertainment = entertainmentRepository.findByContentid(String.valueOf(contentId));
        Barrier barrier = barrierRepository.findByContentid(String.valueOf(contentId));

        boolean liked = false;
        if(!userId.equals("anonymousUser")){
            liked = heartRepository.existsBySpotidAndUserid(entertainment.getId(), userId);
        }
        return new EntertainmentDto().of(entertainment, barrier, liked);
    }
}
