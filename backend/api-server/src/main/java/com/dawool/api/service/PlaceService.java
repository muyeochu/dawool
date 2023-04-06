package com.dawool.api.service;

import com.dawool.api.dto.HeartReqDto;
import com.dawool.api.dto.PlaceDto;
import com.dawool.api.dto.PlaceListDto;
import com.dawool.api.entity.CommonInfo;
import com.dawool.api.entity.CultureFacility;
import com.dawool.api.entity.Entertainment;
import com.dawool.api.entity.Heart;
import com.dawool.api.entity.LeisureSports;
import com.dawool.api.entity.Lodging;
import com.dawool.api.entity.Place;
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
     * @param title 검색할 단어
     * @param type 검색할 타입
     * @param barrier 무장애정보
     * @param page 페이지 번호
     * @param size 페이지마다 보낼 크기
     * @return 검색된 목록
     */
    public List<?> getSearchList(String title, int type, String barrier, int page, int size) {
        String[] barrierCode = barrier.split("");
        List<? extends CommonInfo> list;
        List<PlaceDto> searchList = new ArrayList<>();
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
     * @param searchList DB 에서 검색한 목록
     * @return 검색된 목록 -> DTO
     */
    public List<PlaceDto> getSearchResult(List<? extends CommonInfo> searchList) {
        List<PlaceDto> searchResult= new ArrayList<>();

        for (CommonInfo search : searchList) {
            PlaceDto place = new PlaceDto().of(search);
            searchResult.add(place);
        }

        return searchResult;
    }

    /**
     * 페이지네이션
     * 
     * @param list 검색된 목록
     * @param page 검색할 페이지
     * @param size 페이지마다 넘길 데이터의 양
     * @return 페이지네이션한 목록
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
     * 북마크 저장 및 해제
     *
     * @param heart 북마크할 여행지 정보
     * @return 북마크 여부
     */
    public boolean heartPlace(HeartReqDto heart){
        String objectId = UserService.getLoginUser();

        // 이미 북마크한 여행지인 경우 북마크 취소
        if(heartRepository.existsBySpotidAndUserid(heart.getSpotId(), objectId)){
            // delete
            Heart object = heartRepository.findBySpotidAndUserid(heart.getSpotId(), objectId);
            heartRepository.delete(object);
            return false;
        } else {    // 북마크
            // save
            Place place = Place.builder()
                    .contentid(heart.getContentId())
                    .contenttypeid(heart.getContentTypeId())
                    .title(heart.getTitle())
                    .firstimage(heart.getImageUrl())
                    .category(heart.getCategory())
                    .mobility_weak(heart.getMobilityWeak())
                    .visual_impaired(heart.getVisuallyImpaired())
                    .deaf(heart.getDeaf())
                    .old(heart.getOld())
                    .infant(heart.getInfant())
                    .build();

            Heart object = Heart.builder()
                    .userid(objectId)
                    .spotid(heart.getSpotId())
                    .place(place)
                    .build();
            heartRepository.save(object);
            return true;
        }
    }

    /**
     * 사용자 별 북마크 목록
     *
     * @param page 페이지 번호
     * @param size 페이지마다 데이터의 양
     * @return 북마크한 목록
     */
    public List<PlaceListDto> getHeartList(int page, int size){
        String objectId = UserService.getLoginUser();

        List<Heart> heartList = (List<Heart>) resultList(heartRepository.findByUserid(objectId), page, size);
        List<PlaceListDto> list = new ArrayList<>();
        for(Heart heart: heartList){
            Place place = heart.getPlace();
            PlaceListDto dto = PlaceListDto.builder()
                    .spotId(heart.getSpotid())
                    .contentId(place.getContentid())
                    .contentTypeId(place.getContenttypeid())
                    .title(place.getTitle())
                    .imageUrl(place.getFirstimage())
                    .category(place.getCategory())
                    .mobilityWeak(place.getMobility_weak())
                    .visuallyImpaired(place.getVisual_impaired())
                    .deaf(place.getDeaf())
                    .old(place.getOld())
                    .infant(place.getInfant())
                    .isLiked(true)
                    .build();
            list.add(dto);
        }
        return list;
    }
}
