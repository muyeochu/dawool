package com.dawool.api.repository;

import com.dawool.api.entity.CultureFacility;
import com.dawool.api.entity.Entertainment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 문화시설(14) 관련 Repository
 *
 * @author 김정은
 */
@Repository
public interface CultureFacilityRepository extends MongoRepository<CultureFacility, String> {
    /**
     * 지역 별 관광지 목록
     *
     * @param areaCode
     * @return
     */
    List<CultureFacility> findByAreacode(String areaCode);

    /**
     * 지역 별 청각장애인 시설있는 관광지 목록
     *
     * @param areaCode
     * @param Deaf
     * @return
     */
    List<CultureFacility> findByAreacodeAndDeaf(String areaCode, String Deaf);

    /**
     * 장소 상세조회
     *
     * @param contentId
     * @return
     */
    CultureFacility findByContentid(String contentId);
}
