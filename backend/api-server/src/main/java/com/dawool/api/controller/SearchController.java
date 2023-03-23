package com.dawool.api.controller;

import com.dawool.api.service.SearchService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 검색 controller
 *
 * @author 이준
 */
@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/search")
public class SearchController {

    private final SearchService searchService;

    /**
     * 키워드 검색
     *
     * @param title
     * @param type
     * @param barrier
     * @param page
     * @param size
     * @return
     */
    @GetMapping("")
    public ResponseEntity<?> searchRegion(
            @RequestParam("title") String title,
            @RequestParam("type") int type,
            @RequestParam("barrier") String barrier,
            int page, int size
    ) {
        List<?> searchList = new ArrayList<>();
        searchList = searchService.getSearchList(title, type, barrier, page, size);
        Map<String, List<?>> response = new HashMap<>();
        response.put("contents", searchList);
        return ResponseEntity.ok(response);
    }
}
