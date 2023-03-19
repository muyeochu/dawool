package com.dawool.api.controller;

import com.dawool.api.dto.PlaceDto;
import com.dawool.api.dto.detailInfo.EntertainmentDto;
import com.dawool.api.service.EntertainmentService;
import com.dawool.api.service.LodgingService;
import com.dawool.api.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 장소 관련 Controller
 *
 * @author 김정은
 */

@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/location")
public class PlaceController {

    private final EntertainmentService entertainmentService;
    private final LodgingService lodgingService;
    private final RestaurantService restaurantService;

    /**
     * 타입별 장소 목록
     *
     * @param type
     * @param areaCode
     * @param barrier
     * @param page
     * @param size
     * @return
     */
    @GetMapping("/list/{type}")
    public ResponseEntity<?> getPlaceList(
            @PathVariable("type") int type,
            @RequestParam("area") int areaCode,
            @RequestParam("barrier") String barrier,
            int page, int size){

        List<PlaceDto> placeList = new ArrayList<>();
        switch (type){
            case 12:
                placeList =
                    entertainmentService.getEntertainmentList(areaCode, barrier, page, size);
            case 32:
                placeList =
                    lodgingService.getLodgingList(areaCode, barrier, page, size);
            case 39:
                placeList = restaurantService.getRestaurantList(areaCode, barrier, page, size);


        }

        Map<String, List<PlaceDto>> response = new HashMap<>();
        response.put("contents", placeList);
        return ResponseEntity.ok(response);
    }

    /**
     * 관광지(12) 상세조회
     *
     * @param contentId
     * @return
     */
    @GetMapping("/12/{contentId}")
    public ResponseEntity<?> getEntertainmentInfo(@PathVariable("contentId") int contentId){
        EntertainmentDto entertainment = entertainmentService.getEntertainmentInfo(contentId);

        Map<String, EntertainmentDto> response = new HashMap<>();
        response.put("info", entertainment);
        return ResponseEntity.ok(response);
    }
}
