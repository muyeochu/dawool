package com.dawool.api.repository;

import com.dawool.api.entity.Entertainment;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EntertainmentRepository extends MongoRepository<Entertainment, String> {

    List<Entertainment> findByAreacode(String areaCode, Pageable pageable);
}
