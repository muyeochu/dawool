package com.dawool.api.repository;

import com.dawool.api.entity.CultureFacility;
import com.dawool.api.entity.Entertainment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 문화시설(14) 관련 Repository
 *
 * @author 김정은
 */
@Repository
public interface CultureFacilityRepository extends CommonRepository<CultureFacility, String> {

}