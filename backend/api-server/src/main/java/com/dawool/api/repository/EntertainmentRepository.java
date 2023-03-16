package com.dawool.api.repository;

import com.dawool.api.entity.Entertainment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EntertainmentRepository extends MongoRepository<Entertainment, String> {

}
