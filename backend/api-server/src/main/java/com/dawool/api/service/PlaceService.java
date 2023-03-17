package com.dawool.api.service;

import com.dawool.api.code.Category;
import com.dawool.api.dto.PlaceDto;
import com.dawool.api.dto.detailInfo.EntertainmentDto;
import com.dawool.api.entity.Entertainment;
import com.dawool.api.repository.EntertainmentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * 장소와 관련된 Service
 *
 * @author 김정은
 */

@Service
@RequiredArgsConstructor
@Slf4j
public class PlaceService {

    private final EntertainmentRepository entertainmentRepository;

    /**
     * 지역 별로 관광지(12) 목록
     *
     * @param areaCode
     * @param pageable
     * @return
     */
    public List<PlaceDto> getEntertainmentList(int areaCode, Pageable pageable){
        List<Entertainment> list = entertainmentRepository.findByAreacode(String.valueOf(areaCode), pageable);

        List<PlaceDto> entertainmentList = new ArrayList<>();
        for(Entertainment entertainment: list){
            PlaceDto place = PlaceDto.builder()
                    .spotId(entertainment.getId())
                    .contentId(entertainment.getContentid())
                    .contentTypeId(entertainment.getContenttypeid())
                    .title(entertainment.getTitle())
                    .category(Category.valueOf(entertainment.getCat3()).getCategory())
                    .isLiked(false)
                    .build();
            entertainmentList.add(place);
        }
        return entertainmentList;
    }
}
