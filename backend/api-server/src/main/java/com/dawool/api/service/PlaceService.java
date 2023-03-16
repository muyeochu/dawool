package com.dawool.api.service;

import com.dawool.api.dto.detailInfo.EntertainmentDto;
import com.dawool.api.entity.Entertainment;
import com.dawool.api.repository.EntertainmentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class PlaceService {

    private final EntertainmentRepository entertainmentRepository;

    public List<EntertainmentDto> getEntertainmentList(Pageable pageable){
        List<Entertainment> entertainment = entertainmentRepository.findAll(pageable).toList();
        System.out.println(entertainment.get(0).getContentid());

        return null;
    }
}
