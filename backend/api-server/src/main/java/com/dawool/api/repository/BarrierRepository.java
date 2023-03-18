package com.dawool.api.repository;

import com.dawool.api.entity.Barrier;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BarrierRepository extends MongoRepository<Barrier, String> {

    /**
     * 장소 상세조회
     *
     * @param contentId
     * @return
     */
    Barrier findByContentid(String contentId);
}
