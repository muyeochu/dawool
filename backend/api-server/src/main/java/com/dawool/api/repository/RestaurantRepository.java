package com.dawool.api.repository;

import com.dawool.api.entity.Restaurant;
import org.springframework.stereotype.Repository;

/**
 * 식당(39) 관련 Repository
 *
 * @author 김정은
 */
@Repository
public interface RestaurantRepository extends CommonRepository<Restaurant, String> {

}
