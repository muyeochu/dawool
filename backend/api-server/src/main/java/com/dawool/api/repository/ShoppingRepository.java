package com.dawool.api.repository;

import com.dawool.api.entity.CultureFacility;
import com.dawool.api.entity.Shopping;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 쇼핑(38) 관련 Repository
 *
 * @author 김정은
 */
@Repository
public interface ShoppingRepository extends CommonRepository<Shopping, String> {

}
