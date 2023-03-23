package com.dawool.api.dto.detailInfo;

import com.dawool.api.code.Category;
import com.dawool.api.entity.Barrier;
import com.dawool.api.entity.Entertainment;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 관광지 (12) 정보
 *
 * @author 김정은
 */

@Getter
@Setter
@NoArgsConstructor
public class EntertainmentDto extends CommonInfoDto{

    // 유모차 대여 가능 여부
    private int isBabyCarriage;
    // 애완동물 동반 여부
    private int isPet;
    // 체험 가능 연령
    private String expAgeRange;
    // 체험 안내
    private String expGuide;
    // 세계문화유산유무
    private float heritage1;
    // 세계자연유산유무
    private float heritage2;
    // 세계기록유산유무
    private float heritage3;
    // 문의 및 안내
    private String infoCenter;
    // 주차시설
    private String commonParking;
    // 쉬는 날
    private String restDate;
    // 이용 시기
    private String useSeason;
    // 이용 기간
    private String useTime;

    @Builder
    public EntertainmentDto(int contentId, String title, String category, String homepage, String firstImage, String firstImage2,
                            int areaCode, String addr1, String addr2, float mapX, float mapY, float mLevel,
                            int deaf, int visuallyImpaired, int mobilityWeak, int old, int infant, boolean isLiked, int hit, BarrierDto barrier,
                            int isBabyCarriage, int isPet, String expAgeRange, String expGuide, float heritage1, float heritage2, float heritage3,
                            String infoCenter, String commonParking, String restDate, String useSeason, String useTime) {
        super(contentId, title, category, homepage, firstImage, firstImage2, areaCode, addr1, addr2, mapX, mapY, mLevel, deaf, visuallyImpaired, mobilityWeak, old, infant, isLiked, hit, barrier);
        this.isBabyCarriage = isBabyCarriage;
        this.isPet = isPet;
        this.expAgeRange = expAgeRange;
        this.expGuide = expGuide;
        this.heritage1 = heritage1;
        this.heritage2 = heritage2;
        this.heritage3 = heritage3;
        this.infoCenter = infoCenter;
        this.commonParking = commonParking;
        this.restDate = restDate;
        this.useSeason = useSeason;
        this.useTime = useTime;
    }

    /**
     * Entity -> DTO
     *
     * @param entertainment
     * @param barrier
     * @return
     */
    public EntertainmentDto of(Entertainment entertainment, Barrier barrier){
        return EntertainmentDto.builder()
                // 공통정보
                .contentId(entertainment.getContentid())
                .addr1(entertainment.getAddr1())
                .title(entertainment.getTitle())
                .category(Category.valueOf(entertainment.getCat3()).getCategory())
                .deaf(entertainment.getDeaf())
                .visuallyImpaired(entertainment.getVisual_impaired())
                .mobilityWeak(entertainment.getMobility_weak())
                .old(entertainment.getOld())
                .infant(entertainment.getInfant())
                .isLiked(false)
                .firstImage(entertainment.getFirstimage())
                .homepage(entertainment.getHomepage())
                .mapX(entertainment.getMapx())
                .mapY(entertainment.getMapy())
                .mLevel(entertainment.getMlevel())
                .barrier(new BarrierDto().of(barrier))
                // 상세정보
                .isBabyCarriage(entertainment.getChkbabycarriage())
                .isPet(entertainment.getChkpet())
                .commonParking(entertainment.getParking())
                .expAgeRange(entertainment.getExpagerange())
                .expGuide(entertainment.getExpguide())
                .heritage1(entertainment.getHeritage1())
                .heritage2(entertainment.getHeritage2())
                .heritage3(entertainment.getHeritage3())
                .infoCenter(entertainment.getInfocenter())
                .restDate(entertainment.getRestdate())
                .useSeason(entertainment.getUseseason())
                .useTime(entertainment.getUsetime())
                .build();
    }
}
