package com.dawool.api.service;

import com.dawool.api.dto.PlaceListDto;
import com.dawool.api.dto.detailInfo.RestaurantDto;
import com.dawool.api.entity.Barrier;
import com.dawool.api.entity.CommonInfo;
import com.dawool.api.entity.Restaurant;
import com.dawool.api.repository.BarrierRepository;
import com.dawool.api.repository.CommonTemplate;
import com.dawool.api.repository.HeartRepository;
import com.dawool.api.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * 식당(39) 관련 Service
 *
 * @author 김정은
 * @author 이준
 */
@Service
@Slf4j
@RequiredArgsConstructor
public class RestaurantService {

    private final RestaurantRepository restaurantRepository;
    private final BarrierRepository barrierRepository;
    private final HeartRepository heartRepository;
    private final CommonTemplate commonTemplate;
    private final MongoTemplate mongoTemplate;

    /**
     * 지역 별로 식당(39) 목록
     *
     * @param areaCode
     * @param barrierCode
     * @param page
     * @param size
     * @return
     */
    public List<PlaceListDto> getRestaurantList(String userId, int areaCode, String barrierCode, int page, int size) {

        String[] barrier = barrierCode.split("");

        List<Restaurant> list = getPlaceList(areaCode, barrier, page, size);

        List<PlaceListDto> restaurantList = new ArrayList<>();
        for (CommonInfo restaurant : list) {
            boolean liked = false;
            if(!userId.equals("anonymousUser")){
                liked = heartRepository.existsBySpotidAndUserid(restaurant.getId(), userId);
            }
            PlaceListDto place = new PlaceListDto().of(restaurant, liked);
            restaurantList.add(place);
        }
        return restaurantList;
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
    public List<Restaurant> getPlaceList(int areaCode, String[] barrierCode, int page, int size) {
        List<Restaurant> list;
        Query query = commonTemplate.findByAreacodeAndBarrierFree(areaCode, barrierCode);
        list = mongoTemplate.find(query, Restaurant.class);

        int startIndex = page * size;
        int endIndex = Math.min(startIndex + size, list.size());
        if(list.size() > 0 && startIndex <= list.size()) {
            return list.subList(startIndex, endIndex);
        } else{
            return new ArrayList<>();
        }
    }

    /**
     * 식당 상세정보 조회
     *
     * @param contentId
     * @return
     */
    public RestaurantDto getRestaurantInfo(String userId, int contentId){
        Restaurant restaurant = restaurantRepository.findByContentid(String.valueOf(contentId));
        Barrier barrier = barrierRepository.findByContentid(String.valueOf(contentId));

        boolean liked = false;
        if(!userId.equals("anonymousUser")){
            liked = heartRepository.existsBySpotidAndUserid(restaurant.getId(), userId);
        }
        return new RestaurantDto().of(restaurant, barrier, liked);
    }
}
