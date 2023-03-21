package com.dawool.api.repository;

import com.dawool.api.entity.CultureFacility;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface CommonRepository<T, String> extends MongoRepository<T, String> {
    /**
     * 지역 별 관광지 목록
     *
     * @param areaCode
     * @return
     */
    List<T> findByAreacode(String areaCode);

    /**
     * 지역 별 청각장애인 시설있는 관광지 목록
     *
     * @param areaCode
     * @param Deaf
     * @return
     */
    List<T> findByAreacodeAndDeaf(String areaCode, String Deaf);

    /**
     * 장소 상세조회
     *
     * @param contentId
     * @return
     */
    T findByContentid(String contentId);

    /**
     * title이 포함된 장소 검색 - 한글자 검색
     *
     * @param title
     * @return
     */
    List<T> findByTitle(String title);

    /**
     * title이 포함된 장소 검색
     *
     * @param title
     * @return
     */
    List<T> findByTitleRegex(String title);

    default Query findByAreacodeAndBarrierFree(int areaCode, java.lang.String[] barrierCode) {

        Criteria criteria = new Criteria().andOperator(
                Criteria.where("areacode").is(java.lang.String.valueOf(areaCode)),
                Criteria.where("deaf").gte(barrierCode[0]),
                Criteria.where("visually_impaired").gte(barrierCode[1]),
                Criteria.where("mobility_weak").gte(barrierCode[2]),
                Criteria.where("old").gte(barrierCode[3]),
                Criteria.where("infant").gte(barrierCode[4])
        );
        Query query = new Query(criteria);
        return query;
    }
}
