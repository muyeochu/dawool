package com.dawool.api.service;

import com.dawool.api.dto.detailInfo.EntertainmentDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlaceService {

    private final EntertainmentDto entertainmentDto;

    public List<EntertainmentDto> getEntertainmentList(){


        return null;
    }
}
