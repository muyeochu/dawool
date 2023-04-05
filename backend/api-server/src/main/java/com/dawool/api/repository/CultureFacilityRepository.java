package com.dawool.api.repository;

import com.dawool.api.entity.CultureFacility;
import org.springframework.stereotype.Repository;

/**
 * 문화시설(14) 관련 Repository
 *
 * @author 김정은
 */
@Repository
public interface CultureFacilityRepository extends CommonRepository<CultureFacility, String> {

}