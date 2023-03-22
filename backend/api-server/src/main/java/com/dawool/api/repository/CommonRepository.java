package com.dawool.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.NoRepositoryBean;

/**
 * 조회 관련 Repository
 *
 * @author 이준
 *
 * @param <T>
 * @param <String>
 */
@NoRepositoryBean
public interface CommonRepository<T, String> extends MongoRepository<T, String> {

    /**
     * 장소 상세조회
     *
     * @param contentId
     * @return
     */
    T findByContentid(String contentId);
}
