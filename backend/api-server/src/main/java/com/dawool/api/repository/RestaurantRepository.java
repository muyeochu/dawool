package com.dawool.api.repository;

import com.dawool.api.entity.CultureFacility;
import com.dawool.api.entity.Restaurant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 식당(39) 관련 Repository
 *
 * @author 김정은
 */
@Repository
public interface RestaurantRepository extends CommonRepository<Restaurant, String> {

}
