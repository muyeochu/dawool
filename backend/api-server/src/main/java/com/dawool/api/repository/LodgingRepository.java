package com.dawool.api.repository;

import com.dawool.api.entity.CultureFacility;
import com.dawool.api.entity.Lodging;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 숙박(32) 관련 Repository
 *
 * @author 김정은
 */
@Repository
public interface LodgingRepository extends CommonRepository<Lodging, String> {
//    /**
//     * 지역 별 관광지 목록
//     *
//     * @param areaCode
//     * @return
//     */
//    List<Lodging> findByAreacode(String areaCode);
//
//    /**
//     * 지역 별 청각장애인 시설있는 숙박 목록
//     *
//     * @param areaCode
//     * @param Deaf
//     * @return
//     */
//    List<Lodging> findByAreacodeAndDeaf(String areaCode, String Deaf);
//
//    /**
//     * 장소 상세조회
//     *
//     * @param contentId
//     * @return
//     */
//    Lodging findByContentid(String contentId);
//
//    /**
//     * title이 포함된 장소 검색 - 한글자 검색
//     *
//     * @param title
//     * @return
//     */
//    List<Lodging> findByTitle(String title);
//
//    /**
//     * title이 포함된 장소 검색
//     *
//     * @param title
//     * @return
//     */
//    List<Lodging> findByTitleRegex(String title);
}
