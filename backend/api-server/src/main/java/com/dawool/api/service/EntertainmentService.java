package com.dawool.api.service;

import com.dawool.api.code.Category;
import com.dawool.api.dto.PlaceDto;
import com.dawool.api.dto.detailInfo.EntertainmentDto;
import com.dawool.api.entity.Barrier;
import com.dawool.api.entity.Entertainment;
import com.dawool.api.repository.BarrierRepository;
import com.dawool.api.repository.EntertainmentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 장소와 관련된 Service
 *
 * @author 김정은
 */

@Service
@RequiredArgsConstructor
@Slf4j
public class EntertainmentService {

    private final EntertainmentRepository entertainmentRepository;
    private final BarrierRepository barrierRepository;

    /**
     * 지역 별로 관광지(12) 목록
     *
     * @param type
     * @param areaCode
     * @param barrierCode
     * @param page
     * @param size
     * @return
     */
    public List<PlaceDto> getEntertainmentList(int type, int areaCode, String barrierCode, int page, int size) {

        String[] barrier = barrierCode.split("");

        List<Entertainment> list = getPlaceList(areaCode, barrier, page, size);

        List<PlaceDto> entertainmentList = new ArrayList<>();
        for (Entertainment entertainment : list) {
            PlaceDto place = PlaceDto.builder()
                    .spotId(entertainment.getId())
                    .contentId(entertainment.getContentid())
                    .contentTypeId(entertainment.getContenttypeid())
                    .title(entertainment.getTitle())
                    .imageUrl(entertainment.getFirstimage())
                    .category(Category.valueOf(entertainment.getCat3()).getCategory())
                    .deaf(entertainment.getDeaf())
                    .visuallyImpaired(entertainment.getVisually_impaired())
                    .mobilityWeak(entertainment.getMobility_weak())
                    .old(entertainment.getOld())
                    .infant(entertainment.getInfant())
                    .isLiked(false)
                    .build();
            entertainmentList.add(place);
        }
        return entertainmentList;
    }

    /**
     * 무장애 필터링
     *
     * @param areaCode
     * @param barrierCode
     * @param page
     * @param size
     * @return
     */
    public List<Entertainment> getPlaceList(int areaCode, String[] barrierCode, int page, int size) {
        List<Entertainment> list;
        if (barrierCode[0].equals("1")) {
            list = entertainmentRepository
                    .findByAreacodeAndDeaf(String.valueOf(areaCode), "1");
        } else {
            list = entertainmentRepository
                    .findByAreacode(String.valueOf(areaCode));
        }

        // 시각장애
        if (barrierCode[1].equals("1")) {
            list = list.stream().filter(o -> o.getVisually_impaired() == 1)
                    .collect(Collectors.toList());
        }
        // 지체장애
        if (barrierCode[2].equals("1")) {
            list = list.stream().filter(o -> o.getMobility_weak() == 1)
                    .collect(Collectors.toList());
        }
        // 노인
        if (barrierCode[3].equals("1")) {
            list = list.stream().filter(o -> o.getOld() == 1)
                    .collect(Collectors.toList());
        }
        // 영유아
        if (barrierCode[4].equals("1")) {
            list = list.stream().filter(o -> o.getInfant() == 1)
                    .collect(Collectors.toList());
        }

        if(list.size() > 0) {
            int startIndex = page * size;
            return list.subList(startIndex, startIndex + size);
        } else{
            return new ArrayList<>();
        }
    }

    /**
     * 관광지 상세정보 조보
     *
     * @param contentId
     * @return
     */
    public EntertainmentDto getEntertainmentInfo(int contentId){
        Entertainment entertainment = entertainmentRepository.findByContentid(String.valueOf(contentId));
        Barrier barrier = barrierRepository.findByContentid(String.valueOf(contentId));

        return new EntertainmentDto().of(entertainment, barrier);
    }
}
