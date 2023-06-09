package com.dawool.api.controller;

import com.dawool.api.service.PlaceService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
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

    private final PlaceService searchService;

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
        Map<String, Object> response = new HashMap<>();
        if(title.length() == 0) {
            response.put("contents", "Empty Title");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
        searchList = searchService.getSearchList(title, type, barrier, page, size);
        if (searchList.size() > 0) {
            response.put("contents", searchList);
            return ResponseEntity.ok(response);
        }

        response.put("contents", HttpStatus.NO_CONTENT.getReasonPhrase());
        return ResponseEntity.ok(response);
    }
}
