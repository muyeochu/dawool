package com.dawool.api.repository;

import com.dawool.api.entity.Entertainment;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 관광지 관련 Repository
 *
 * @author 김정은
 */
@Repository
public interface EntertainmentRepository extends MongoRepository<Entertainment, String> {

    /**
     * 지역 별 관광지 목록
     *
     * @param areaCode
     * @return
     */
    List<Entertainment> findByAreacode(String areaCode);

    List<Entertainment> findByAreacodeAndDeaf(String areaCode, String Deaf);
}
