package com.dawool.api.repository;

import com.dawool.api.entity.CultureFacility;
import com.dawool.api.entity.Restaurant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 식당(39) 관련 Repository
 *
 * @author 김정은
 */
@Repository
public interface RestaurantRepository extends CommonRepository<Restaurant, String> {
//    /**
//     * 지역 별 관광지 목록
//     *
//     * @param areaCode
//     * @return
//     */
//    List<Restaurant> findByAreacode(String areaCode);
//
//    /**
//     * 지역 별 청각장애인 시설있는 관광지 목록
//     *
//     * @param areaCode
//     * @param Deaf
//     * @return
//     */
//    List<Restaurant> findByAreacodeAndDeaf(String areaCode, String Deaf);
//
//    /**
//     * 장소 상세조회
//     *
//     * @param contentId
//     * @return
//     */
//    Restaurant findByContentid(String contentId);
//
//    /**
//     * title이 포함된 장소 검색 - 한글자 검색
//     *
//     * @param title
//     * @return
//     */
//    List<Restaurant> findByTitle(String title);
//
//    /**
//     * title이 포함된 장소 검색
//     *
//     * @param title
//     * @return
//     */
//    List<Restaurant> findByTitleRegex(String title);
}
