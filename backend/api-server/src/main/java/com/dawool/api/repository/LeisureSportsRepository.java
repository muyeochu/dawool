package com.dawool.api.repository;

import com.dawool.api.entity.LeisureSports;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LeisureSportsRepository extends MongoRepository<LeisureSports, String> {
    /**
     * 지역 별 관광지 목록
     *
     * @param areaCode
     * @return
     */
    List<LeisureSports> findByAreacode(String areaCode);

    /**
     * 지역 별 청각장애인 시설있는 관광지 목록
     *
     * @param areaCode
     * @param Deaf
     * @return
     */
    List<LeisureSports> findByAreacodeAndDeaf(String areaCode, String Deaf);
}
