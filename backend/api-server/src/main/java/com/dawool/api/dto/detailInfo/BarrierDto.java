package com.dawool.api.dto.detailInfo;

import com.dawool.api.entity.Barrier;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BarrierDto {

    private String parking;
    private String route;
    private String publicTransport;
    private String ticketOffice;
    private String promotion;
    private String wheelchair;
    private String exit;
    private String elevator;
    private String restroom;
    private String auditorium;
    private String room;
    private String handicapEtc;
    private String braileBlock;
    private String helpDog;
    private String guideHuman;
    private String audioGuide;
    private String bigPrint;
    private String brailePromotion;
    private String guideSystem;
    private String blindHandicapEtc;
    private String signGuide;
    private String videoGuide;
    private String hearingRoom;
    private String hearingHandicapEtc;
    private String stroller;
    private String lactationRoom;
    private String babySpareChair;
    private String infantsFamilyEtc;

    public BarrierDto of(Barrier barrier){
        if(barrier == null) {
            return BarrierDto.builder()
                    // 무장애 정보
                    .parking("")
                    .route("")
                    .publicTransport("")
                    .ticketOffice("")
                    .promotion("")
                    .wheelchair("")
                    .exit("")
                    .elevator("")
                    .restroom("")
                    .auditorium("")
                    .room("")
                    .handicapEtc("")

                    .braileBlock("")
                    .helpDog("")
                    .guideHuman("")
                    .audioGuide("")
                    .bigPrint("")
                    .brailePromotion("")
                    .guideSystem("")
                    .blindHandicapEtc("")

                    .signGuide("")
                    .videoGuide("")
                    .hearingRoom("")
                    .hearingHandicapEtc("")

                    .stroller("")
                    .lactationRoom("")
                    .babySpareChair("")
                    .infantsFamilyEtc("")
                    .babySpareChair("")
                    .build();
        }
        return BarrierDto.builder()
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
    }
}
