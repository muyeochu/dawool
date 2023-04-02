package com.dawool.api.repository;

import com.dawool.api.entity.CultureFacility;
import com.dawool.api.entity.LeisureSports;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 레포츠(28) 관련 Repository
 *
 * @author 김정은
 */
@Repository
public interface LeisureSportsRepository extends CommonRepository<LeisureSports, String> {

}
