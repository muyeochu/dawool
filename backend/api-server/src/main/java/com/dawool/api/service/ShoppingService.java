package com.dawool.api.service;

import com.dawool.api.dto.PlaceDto;
import com.dawool.api.dto.detailInfo.ShoppingDto;
import com.dawool.api.entity.Barrier;
import com.dawool.api.entity.CommonInfo;
import com.dawool.api.entity.Shopping;
import com.dawool.api.repository.BarrierRepository;
import com.dawool.api.repository.CommonTemplate;
import com.dawool.api.repository.ShoppingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * 쇼핑(38) 관련 Service
 *
 * @author 김정은
 */
@Service
@Slf4j
@RequiredArgsConstructor
public class ShoppingService {

    private final ShoppingRepository shoppingRepository;
    private final BarrierRepository barrierRepository;
    private final CommonTemplate commonTemplate;
    private final MongoTemplate mongoTemplate;

    /**
     * 지역 별로 쇼핑(38) 목록
     *
     * @param areaCode
     * @param barrierCode
     * @param page
     * @param size
     * @return
     */
    public List<PlaceDto> getShoppingList(int areaCode, String barrierCode, int page, int size) {

        String[] barrier = barrierCode.split("");

        List<Shopping> list = getPlaceList(areaCode, barrier, page, size);

        List<PlaceDto> shoppingList = new ArrayList<>();
        for (CommonInfo shopping : list) {
            PlaceDto place = new PlaceDto().of(shopping);
            shoppingList.add(place);
        }
        return shoppingList;
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
    public List<Shopping> getPlaceList(int areaCode, String[] barrierCode, int page, int size) {
        List<Shopping> list;
        Query query = commonTemplate.findByAreacodeAndBarrierFree(areaCode, "", barrierCode);
        list = mongoTemplate.find(query, Shopping.class);

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
    public ShoppingDto getShoppingInfo(int contentId){
        Shopping shopping = shoppingRepository.findByContentid(String.valueOf(contentId));
        Barrier barrier = barrierRepository.findByContentid(String.valueOf(contentId));

        return new ShoppingDto().of(shopping, barrier);
    }
}
