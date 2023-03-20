package com.dawool.api.controller;

import com.dawool.api.service.SearchService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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

    private SearchService searchService;
    /**
     * 지역 검색
     *
     * @param areaCode
     * @param pageable
     * @return
     */
    @GetMapping("/")
    public ResponseEntity<?> searchRegion(
            @RequestParam("title") String title,
            @RequestParam("type") int type,
            @RequestParam("barrier") String barrier,
            int page, int size
    ) {
        searchService.getSearchList(title, type, barrier, page, size);
        return null;
    }
}
