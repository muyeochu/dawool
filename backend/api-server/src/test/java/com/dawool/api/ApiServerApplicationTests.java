package com.dawool.api;

import com.dawool.api.entity.Shopping;
import com.dawool.api.repository.CommonTemplate;
import com.dawool.api.repository.RestaurantRepository;
import com.dawool.api.repository.ShoppingRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.util.Arrays;
import java.util.List;

@SpringBootTest
class ApiServerApplicationTests {

	@Autowired
	private ShoppingRepository shoppingRepository;
	@Autowired
	private RestaurantRepository restaurantRepository;
	@Autowired
	private CommonTemplate commonTemplate;
	@Autowired
	private MongoTemplate mongoTemplate;
	@Test
	void contextLoads() {
		List<Shopping> list = null;
//		list = shoppingRepository.findByTitleRegex(".*롯데.*");
//
//		for(Shopping l : list) {
//			System.out.println("### Contains " + l.getTitle());
//		}

		String str = "10001";
		String[] arr = str.split("");
		System.out.println(Arrays.toString(arr));
		list = mongoTemplate.find(commonTemplate.findByAreacodeAndBarrierFree(1, arr), Shopping.class,"shopping");
		System.out.println(list.size());
		if(!list.isEmpty()) {
			for (Shopping l : list) {
				System.out.println("### Filter : " + l.getTitle());
			}
		}
		else {
			System.out.println("###EMPTY###");
		}
	}

}
