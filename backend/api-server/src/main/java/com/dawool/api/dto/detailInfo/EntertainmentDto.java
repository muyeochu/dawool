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
    public EntertainmentDto(int contentid, String title, String category, String homepage, String firstimage, String firstimage2, int areacode, String addr1, String addr2, float mapx, float mapy, float mlevel,
                            int deaf, int visuallyImpaired, int mobilityWeak, int old, int infant, boolean isLiked, int hit,
                            String parking, String route, String publicTransport, String ticketOffice, String promotion, String wheelchair, String exit, String elevator, String restroom,
                            String auditorium, String room, String handicapEtc, String braileBlock, String helpDog, String guideHuman, String audioGuide, String bigPrint, String brailePromotion, String guideSystem, String blindHandicapEtc,
                            String signGuide, String videoGuide, String hearingRoom, String hearingHandicapEtc, String stroller, String lactationRoom, String babySpareChair, String infantsFamilyEtc,
                            int isBabyCarriage, int isPet, String expAgeRange, String expGuide, float heritage1, float heritage2, float heritage3,
                            String infoCenter, String commonParking, String restDate, String useSeason, String useTime) {

        super(contentid, title, category, homepage, firstimage, firstimage2, areacode, addr1, addr2, mapx, mapy, mlevel, deaf, visuallyImpaired, mobilityWeak, old, infant, isLiked, hit, parking, route, publicTransport, ticketOffice, promotion, wheelchair, exit, elevator, restroom, auditorium, room, handicapEtc, braileBlock, helpDog, guideHuman, audioGuide, bigPrint, brailePromotion, guideSystem, blindHandicapEtc, signGuide, videoGuide, hearingRoom, hearingHandicapEtc, stroller, lactationRoom, babySpareChair, infantsFamilyEtc);
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
        EntertainmentDto dto = EntertainmentDto.builder()
                // 공통정보
                .contentid(entertainment.getContentid())
                .addr1(entertainment.getAddr1())
                .title(entertainment.getTitle())
                .category(Category.valueOf(entertainment.getCat3()).getCategory())
                .deaf(entertainment.getDeaf())
                .visuallyImpaired(entertainment.getVisually_impaired())
                .mobilityWeak(entertainment.getMobility_weak())
                .old(entertainment.getOld())
                .infant(entertainment.getInfant())
                .isLiked(false)
                .firstimage(entertainment.getFirstimage())
                .homepage(entertainment.getHomepage())
                .mapx(entertainment.getMapx())
                .mapy(entertainment.getMapy())
                .mlevel(entertainment.getMlevel())
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
                // 무장애 정보
                .parking(barrier.getParking())
                .route(barrier.getRoute())
                .publicTransport(barrier.getPublictransport())
                .ticketOffice(barrier.getTicketoffice())
                .promotion(barrier.getPromotion())
                .wheelchair(barrier.getWheelchair())
                .exit(barrier.getExit())
                .elevator(barrier.getElevator())
                .restroom(barrier.getRestroom())
                .auditorium(barrier.getAuditorium())
                .room(barrier.getRoom())
                .handicapEtc(barrier.getHandicapetc())

                .braileBlock(barrier.getBraileblock())
                .helpDog(barrier.getHelpdog())
                .guideHuman(barrier.getGuidehuman())
                .audioGuide(barrier.getAudioguide())
                .bigPrint(barrier.getBigprint())
                .brailePromotion(barrier.getBrailepromotion())
                .guideSystem(barrier.getGuidesystem())
                .blindHandicapEtc(barrier.getBlindhandicapetc())

                .signGuide(barrier.getSignguide())
                .videoGuide(barrier.getVideoguide())
                .hearingRoom(barrier.getHearingroom())
                .hearingHandicapEtc(barrier.getHearinghandicapetc())

                .stroller(barrier.getStroller())
                .lactationRoom(barrier.getLactationroom())
                .babySpareChair(barrier.getBabysparechair())
                .infantsFamilyEtc(barrier.getInfantsfamilyetc())
                .babySpareChair(barrier.getBabysparechair())
                .build();
        return dto;
    }
}
