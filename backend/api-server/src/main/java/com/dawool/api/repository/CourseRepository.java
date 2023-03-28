package com.dawool.api.repository;

import com.dawool.api.entity.Course;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 코스 관련 Repository
 *
 */
@Repository
public interface CourseRepository extends MongoRepository<Course, String> {

    List<Course> findByUserid(String userId);
}
