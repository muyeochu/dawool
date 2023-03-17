package com.dawool.api.repository;

import com.dawool.api.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * 회원 Repository
 *
 * @author 이준
 */
@Repository
public interface UserRepository extends MongoRepository<User, String> {
    Boolean existsByKakaoId(long kakaoId);

    User findByKakaoId(long kakaoId);
}
