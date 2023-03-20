package com.dawool.api.repository;

import com.dawool.api.entity.CultureFacility;
import com.dawool.api.entity.Shopping;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 쇼핑(38) 관련 Repository
 *
 * @author 김정은
 */
@Repository
public interface ShoppingRepository extends MongoRepository<Shopping, String> {
    /**
     * 지역 별 관광지 목록
     *
     * @param areaCode
     * @return
     */
    List<Shopping> findByAreacode(String areaCode);

    /**
     * 지역 별 청각장애인 시설있는 관광지 목록
     *
     * @param areaCode
     * @param Deaf
     * @return
     */
    List<Shopping> findByAreacodeAndDeaf(String areaCode, String Deaf);

    /**
     * 장소 상세조회
     *
     * @param contentId
     * @return
     */
    Shopping findByContentid(String contentId);

    List<Shopping> findByTitleLike(String title);

    List<Shopping> findByTitleContains(String title);
}
