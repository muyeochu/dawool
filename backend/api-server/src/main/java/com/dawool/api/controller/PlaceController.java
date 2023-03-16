package com.dawool.api.controller;

import com.dawool.api.dto.detailInfo.EntertainmentDto;
import com.dawool.api.service.PlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api/location")
public class PlaceController {

    private final PlaceService placeService;

    @GetMapping("/list/spot")
    public ResponseEntity<?> getEntertainmentList(Pageable pageable){
        List<EntertainmentDto> entertainmentList = placeService.getEntertainmentList(pageable);

        Map<String, List<EntertainmentDto>> response = new HashMap<>();
        response.put("contents", entertainmentList);
        return ResponseEntity.ok(response);
    }
}
