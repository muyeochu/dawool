package com.dawool.api.service;

import com.dawool.api.dto.SearchDto;
import com.dawool.api.entity.CommonInfo;
import com.dawool.api.entity.CultureFacility;
import com.dawool.api.entity.Entertainment;
import com.dawool.api.entity.Heart;
import com.dawool.api.entity.LeisureSports;
import com.dawool.api.entity.Lodging;
import com.dawool.api.entity.Restaurant;
import com.dawool.api.entity.Shopping;
import com.dawool.api.repository.CommonTemplate;
import com.dawool.api.repository.HeartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * 검색 서비스
 *
 * @author 이준
 */
@Service
@RequiredArgsConstructor
public class PlaceService {

    private final CommonTemplate commonTemplate;
    private final MongoTemplate mongoTemplate;
    private final HeartRepository heartRepository;

    /**
     * 타이틀을 카테고리, 무장애 필터링 적용하여 검색
     *
     * @param title
     * @param type
     * @param barrier
     * @param page
     * @param size
     * @return
     */
    public List<?> getSearchList(String title, int type, String barrier, int page, int size) {
        String[] barrierCode = barrier.split("");
        List<? extends CommonInfo> list = new ArrayList<>();
        List<SearchDto> searchList = new ArrayList<>();
        Query query = commonTemplate.findByTitleAndBarrierFree(title, barrierCode);

        switch (type) {
            case 0 :
                searchList.addAll(getSearchResult(mongoTemplate.find(query, Entertainment.class)));
                searchList.addAll(getSearchResult(mongoTemplate.find(query, CultureFacility.class)));
                searchList.addAll(getSearchResult(mongoTemplate.find(query, LeisureSports.class)));
                searchList.addAll(getSearchResult(mongoTemplate.find(query, Lodging.class)));
                searchList.addAll(getSearchResult(mongoTemplate.find(query, Shopping.class)));
                searchList.addAll(getSearchResult(mongoTemplate.find(query, Restaurant.class)));
                break;
            case 12:
                list = mongoTemplate.find(query, Entertainment.class);
                searchList = getSearchResult(list);
                break;
            case 14:
                list = mongoTemplate.find(query, CultureFacility.class);
                searchList = getSearchResult(list);
                break;
            case 28:
                list = mongoTemplate.find(query, LeisureSports.class);
                searchList = getSearchResult(list);
                break;
            case 32:
                list = mongoTemplate.find(query, Lodging.class);
                searchList = getSearchResult(list);
                break;
            case 38:
                list = mongoTemplate.find(query, Shopping.class);
                searchList = getSearchResult(list);
                break;
            case 39:
                list = mongoTemplate.find(query, Restaurant.class);
                searchList = getSearchResult(list);
                break;
            default:
                return searchList;
        }

        return resultList(searchList, page, size);
    }

    /**
     * Entity -> Dto
     *
     * @param searchList
     * @return
     */
    public List<SearchDto> getSearchResult(List<? extends CommonInfo> searchList) {
        List<SearchDto> searchResult= new ArrayList<>();

        for (CommonInfo search : searchList) {
            SearchDto place = new SearchDto().of(search);
            searchResult.add(place);
        }

        return searchResult;
    }

    /**
     * 페이지네이션
     * 
     * @param list
     * @param page
     * @param size
     * @return
     */
    public List<?> resultList(List<?> list, int page, int size) {
        int startIndex = page * size;
        int endIndex = Math.min(startIndex + size, list.size());
        if(list.size() > 0 && startIndex <= list.size()) {
            return list.subList(startIndex, endIndex);
        } else{
            return new ArrayList<>();
        }
    }

    /**
     *
     * @param contentId
     */
    public void heartPlace(int contentId){
        String objectId = UserService.getLoginUser();

        // 이미 북마크한 여행지인 경우 북마크 취소
        if(heartRepository.existsByContentidAndUserid(contentId, objectId)){
            // delete
            Heart heart = heartRepository.findByContentidAndUserid(contentId, objectId);
            heartRepository.delete(heart);
        } else {    // 북마크
            // save
            Heart heart = Heart.builder()
                    .userid(objectId)
                    .contentid(contentId)
                    .build();
            heartRepository.save(heart);
        }
    }
}
