package com.dawool.api.repository;


import com.dawool.api.entity.Heart;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * 북마크 관련 Repository
 *
 * @author 김정은
 */

public interface HeartRepository extends MongoRepository<Heart, String> {

    boolean existsByContentidAndUserid(int contentId, String userId);
    Heart findByContentidAndUserid(int contentId, String userId);
}
