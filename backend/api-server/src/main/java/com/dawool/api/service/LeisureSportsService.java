package com.dawool.api.service;

import com.dawool.api.dto.PlaceDto;
import com.dawool.api.dto.detailInfo.LeisureSportsDto;
import com.dawool.api.entity.Barrier;
import com.dawool.api.entity.CommonInfo;
import com.dawool.api.entity.LeisureSports;
import com.dawool.api.repository.BarrierRepository;
import com.dawool.api.repository.CommonTemplate;
import com.dawool.api.repository.LeisureSportsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * 레포츠(28) 관련 Service
 *
 * @author 김정은
 */
@Service
@Slf4j
@RequiredArgsConstructor
public class LeisureSportsService {

    private final LeisureSportsRepository leisureSportsRepository;
    private final BarrierRepository barrierRepository;
    private final CommonTemplate commonTemplate;
    private final MongoTemplate mongoTemplate;

    /**
     * 지역 별로 레포츠(28) 목록
     *
     * @param areaCode
     * @param barrierCode
     * @param page
     * @param size
     * @return
     */
    public List<PlaceDto> getLeisureSportsList(int areaCode, String barrierCode, int page, int size) {

        String[] barrier = barrierCode.split("");

        List<LeisureSports> list = getPlaceList(areaCode, barrier, page, size);

        List<PlaceDto> leisureSportsList = new ArrayList<>();
        for (CommonInfo leisureSports : list) {
            PlaceDto place = new PlaceDto().of(leisureSports);
            leisureSportsList.add(place);
        }
        return leisureSportsList;
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
    public List<LeisureSports> getPlaceList(int areaCode, String[] barrierCode, int page, int size) {
        List<LeisureSports> list;
        Query query = commonTemplate.findByAreacodeAndBarrierFree(areaCode, "", barrierCode);
        list = mongoTemplate.find(query, LeisureSports.class);

        int startIndex = page * size;
        int endIndex = Math.min(startIndex + size, list.size());
        if(list.size() > 0 && startIndex <= list.size()) {
            return list.subList(startIndex, endIndex);
        } else{
            return new ArrayList<>();
        }
    }

    /**
     * 레포츠 상세정보 조회
     *
     * @param contentId
     * @return
     */
    public LeisureSportsDto getLeisureSportsInfo(int contentId){
        LeisureSports leisureSports = leisureSportsRepository.findByContentid(String.valueOf(contentId));
        Barrier barrier = barrierRepository.findByContentid(String.valueOf(contentId));

        return new LeisureSportsDto().of(leisureSports, barrier);
    }
}
