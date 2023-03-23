package com.dawool.api.repository;

import com.dawool.api.entity.CultureFacility;
import com.dawool.api.entity.Lodging;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 숙박(32) 관련 Repository
 *
 * @author 김정은
 */
@Repository
public interface LodgingRepository extends CommonRepository<Lodging, String> {

}
