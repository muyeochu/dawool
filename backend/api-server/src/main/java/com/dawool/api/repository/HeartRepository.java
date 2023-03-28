package com.dawool.api.repository;


import com.dawool.api.entity.Heart;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 북마크 관련 Repository
 *
 * @author 김정은
 */

@Repository
public interface HeartRepository extends MongoRepository<Heart, String> {

    boolean existsBySpotidAndUserid(String spotId, String userId);
    Heart findBySpotidAndUserid(String spotId, String userId);
    List<Heart> findByUserid(String userId);
}
