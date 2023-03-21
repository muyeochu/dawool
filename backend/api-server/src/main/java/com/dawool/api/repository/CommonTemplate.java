package com.dawool.api.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
@RequiredArgsConstructor
public class CommonTemplate {
    public Query findByAreacodeAndBarrierFree(int areaCode, String[] barrierCode) {
        System.out.println(Arrays.toString(barrierCode));
        Criteria criteria = new Criteria().andOperator(
                Criteria.where("areacode").is(String.valueOf(areaCode)),
                Criteria.where("deaf").gte(barrierCode[0]),
                Criteria.where("visual_impaired").gte(barrierCode[1]),
                Criteria.where("mobility_weak").gte(barrierCode[2]),
                Criteria.where("old").gte(barrierCode[3]),
                Criteria.where("infant").gte(barrierCode[4])
        );
        Query query = new Query(criteria);
        return query;
    }
}
