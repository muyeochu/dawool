package com.dawool.api.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

/**
 * 조회 관련 template
 *
 * @author 이준
 */
@Component
@RequiredArgsConstructor
public class CommonTemplate {
    /**
     * 지역 목록 무장애 필터링 조회
     * 
     * @param areaCode
     * @param barrierCode
     * @return Query
      */
    public Query findByAreacodeAndBarrierFree(int areaCode, String[] barrierCode) {
        Criteria criteria = new Criteria();
        criteria = Criteria.where("areacode").is(String.valueOf(areaCode));
        criteria.and("mobility_weak").gte(barrierCode[0])
                .and("visual_impaired").gte(barrierCode[1])
                .and("deaf").gte(barrierCode[2])
                .and("old").gte(barrierCode[3])
                .and("infant").gte(barrierCode[4]);
        
        Query query = new Query(criteria);
        return query;
    }

    /**
     * 타이틀 무장애 필터링 조회
     *
     * @param title
     * @param barrierCode
     * @return Query
     */
    public Query findByTitleAndBarrierFree(String title, String[] barrierCode) {
        Criteria criteria = new Criteria();
        String target;
        if (title.length() == 1) {
            target = title;
            criteria = Criteria.where("title").is(target);
        } else if (title.length() > 1) {
            target = ".*" + title + ".*";
            criteria = Criteria.where("title").regex(target);

        }

        criteria.and("mobility_weak").gte(barrierCode[0])
                .and("visual_impaired").gte(barrierCode[1])
                .and("deaf").gte(barrierCode[2])
                .and("old").gte(barrierCode[3])
                .and("infant").gte(barrierCode[4]);

        Query query = new Query(criteria);
        return query;
    }
}
