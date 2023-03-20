package com.dawool.api.repository;

import com.dawool.api.entity.CultureFacility;
import com.dawool.api.entity.Entertainment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

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
}
