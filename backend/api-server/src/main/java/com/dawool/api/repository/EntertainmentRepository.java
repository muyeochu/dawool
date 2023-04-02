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
public interface EntertainmentRepository extends CommonRepository<Entertainment, String> {

}
