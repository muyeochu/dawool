package com.dawool.api.controller;

import com.dawool.api.dto.HeartReqDto;
import com.dawool.api.dto.PlaceListDto;
import com.dawool.api.dto.detailInfo.CultureFacilityDto;
import com.dawool.api.dto.detailInfo.EntertainmentDto;
import com.dawool.api.dto.detailInfo.LeisureSportsDto;
import com.dawool.api.dto.detailInfo.LodgingDto;
import com.dawool.api.dto.detailInfo.RestaurantDto;
import com.dawool.api.dto.detailInfo.ShoppingDto;
import com.dawool.api.service.CultureFacilityService;
import com.dawool.api.service.EntertainmentService;
import com.dawool.api.service.LeisureSportsService;
import com.dawool.api.service.LodgingService;
import com.dawool.api.service.PlaceService;
import com.dawool.api.service.RestaurantService;
import com.dawool.api.service.ShoppingService;
import com.dawool.api.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
    private final CultureFacilityService  cultureFacilityService;
    private final LeisureSportsService leisureSportsService;
    private final LodgingService lodgingService;
    private final ShoppingService shoppingService;
    private final RestaurantService restaurantService;
    private final PlaceService placeService;

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

        String userId = UserService.getLoginUser();
        List<PlaceListDto> placeList = new ArrayList<>();
        switch (type){
            case 12:
                placeList =
                    entertainmentService.getEntertainmentList(userId, areaCode, barrier, page, size);
                break;
            case 14:
                placeList =
                        cultureFacilityService.getCultureFacilityList(userId, areaCode, barrier, page, size);
                break;
            case 28:
                placeList =
                        leisureSportsService.getLeisureSportsList(userId, areaCode, barrier, page, size);
                break;
            case 32:
                placeList =
                        lodgingService.getLodgingList(userId, areaCode, barrier, page, size);
                break;
            case 38:
                placeList =
                        shoppingService.getShoppingList(userId, areaCode, barrier, page, size);
                break;
            case 39:
                placeList =
                        restaurantService.getRestaurantList(userId, areaCode, barrier, page, size);
                break;
        }

        Map<String, List<PlaceListDto>> response = new HashMap<>();
        response.put("contents", placeList);
        return ResponseEntity.ok(response);
    }

    /**
     * 타입별 상세조회
     *
     * @param type
     * @param contentId
     * @return
     */
    @GetMapping("/{type}/{contentId}")
    public ResponseEntity<?> getPlaceInfo(@PathVariable("type") int type, @PathVariable("contentId") int contentId){

        String userId = UserService.getLoginUser();
        switch (type){
            case 12:
                EntertainmentDto entertainment = entertainmentService.getEntertainmentInfo(userId, contentId);
                Map<String, EntertainmentDto> entertainmentResponse = new HashMap<>();
                entertainmentResponse.put("info", entertainment);
                return ResponseEntity.ok(entertainmentResponse);
            case 14:
                CultureFacilityDto cultureFacility = cultureFacilityService.getCultureFacilityInfo(userId, contentId);
                Map<String, CultureFacilityDto> cultureFacilityResponse = new HashMap<>();
                cultureFacilityResponse.put("info", cultureFacility);
                return ResponseEntity.ok(cultureFacilityResponse);
            case 28:
                LeisureSportsDto leisureSports = leisureSportsService.getLeisureSportsInfo(userId, contentId);
                Map<String, LeisureSportsDto> leisureSportsResponse = new HashMap<>();
                leisureSportsResponse.put("info", leisureSports);
                return ResponseEntity.ok(leisureSportsResponse);
            case 32:
                LodgingDto lodging = lodgingService.getLodgingInfo(userId, contentId);
                Map<String, LodgingDto> lodgingResponse = new HashMap<>();
                lodgingResponse.put("info", lodging);
                return ResponseEntity.ok(lodgingResponse);
            case 38:
                ShoppingDto shopping = shoppingService.getShoppingInfo(userId, contentId);
                Map<String, ShoppingDto> shoppingResponse = new HashMap<>();
                shoppingResponse.put("info", shopping);
                return ResponseEntity.ok(shoppingResponse);
            case 39:
                RestaurantDto restaurant = restaurantService.getRestaurantInfo(userId, contentId);
                Map<String, RestaurantDto> restaurantResponse = new HashMap<>();
                restaurantResponse.put("info", restaurant);
                return ResponseEntity.ok(restaurantResponse);
        }
        return ResponseEntity.ok(HttpStatus.BAD_REQUEST);
    }

    /**
     * 북마크 저장 및 해제
     *
     * @return
     */
    @PostMapping("/bookmark")
    public ResponseEntity<?> heartPlace(@RequestBody HeartReqDto heart){
        boolean liked = placeService.heartPlace(heart);
        Map<String, Boolean> response = new HashMap<>();
        response.put("liked", liked);
        return ResponseEntity.ok(response);
    }

    /**
     * 북마크 목록
     *
     * @param page
     * @param size
     * @return
     */
    @GetMapping("/bookmark")
    public ResponseEntity<?> getHeartList(int page, int size){
        List<PlaceListDto> list = placeService.getHeartList(page, size);
        Map<String, Object> response = new HashMap<>();
        if (list.isEmpty()) {
            response.put("contents", "No Content");
            return ResponseEntity.ok(response);
        }
        response.put("contents", list);
        return ResponseEntity.ok(response);
    }
}
