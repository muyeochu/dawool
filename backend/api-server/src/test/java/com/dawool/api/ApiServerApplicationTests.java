package com.dawool.api;

import com.dawool.api.entity.Shopping;
import com.dawool.api.repository.CommonTemplate;
import com.dawool.api.repository.CourseRepository;
import com.dawool.api.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.util.Arrays;
import java.util.List;

@SpringBootTest
class ApiServerApplicationTests {

	@Autowired
	private CommonTemplate commonTemplate;
	@Autowired
	private MongoTemplate mongoTemplate;
	@Autowired
	private CourseRepository courseRepository;
	@Autowired
	private UserService userService;
	@Test
	void contextLoads() {

	}

}
