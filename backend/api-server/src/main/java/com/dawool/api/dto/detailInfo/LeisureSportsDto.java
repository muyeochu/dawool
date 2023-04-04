package com.dawool.api.dto.detailInfo;

import com.dawool.api.code.Category;
import com.dawool.api.entity.Barrier;
import com.dawool.api.entity.LeisureSports;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 레포츠(28) 관련 정보
 *
 * @author 김정은
 */

@Getter
@Setter
@NoArgsConstructor
public class LeisureSportsDto extends CommonInfoDto{

    // 수용인원
    private String accomCount;
    // 유모차 대여 여부
    private float isBabyCarriage;
    // 애완동물 동반 여부
    private float isPet;
    // 체험 연령
    private String expAgeRange;
    // 문의 및 안내
    private String infoCenter;
    // 개장기간
    private String openPeriod;
    // 주차요금
    private String parkingFee;
    // 주차시설
    private String commonParking;
    // 예약안내
    private String reservation;
    // 쉬는 날
    private String restDate;
    // 이용 요금
    private String useFee;
    // 운영 시간
    private String useTime;

    @Builder
    public LeisureSportsDto(String spotId, int contentId, int contentTypeId, String title, String category, String homepage, String firstImage,
                            int areaCode, String addr1, double mapX, double mapY, float mLevel, int deaf, int visuallyImpaired, int mobilityWeak, int old, int infant, boolean isLiked, int hit, BarrierDto barrier,
                            String accomCount, float isBabyCarriage, float isPet, String expAgeRange, String infoCenter, String openPeriod,
                            String parkingFee, String commonParking, String reservation, String restDate, String useFee, String useTime) {
        super(spotId, contentId, contentTypeId, title, category, homepage, firstImage, areaCode, addr1, mapX, mapY, mLevel, deaf, visuallyImpaired, mobilityWeak, old, infant, isLiked, hit, barrier);
        this.accomCount = accomCount;
        this.isBabyCarriage = isBabyCarriage;
        this.isPet = isPet;
        this.expAgeRange = expAgeRange;
        this.infoCenter = infoCenter;
        this.openPeriod = openPeriod;
        this.parkingFee = parkingFee;
        this.commonParking = commonParking;
        this.reservation = reservation;
        this.restDate = restDate;
        this.useFee = useFee;
        this.useTime = useTime;
    }

    public LeisureSportsDto of(LeisureSports leisureSports, Barrier barrier, boolean liked){
        return LeisureSportsDto.builder()
                .spotId(leisureSports.getId())
                // 공통정보
                .contentId(leisureSports.getContentid())
                .contentTypeId(leisureSports.getContenttypeid())
                .addr1(leisureSports.getAddr1().equals("0") ? leisureSports.getAddr2() : leisureSports.getAddr1())
                .title(leisureSports.getTitle())
                .category(Category.valueOf(leisureSports.getCat3()).getCategory())
                .deaf(leisureSports.getDeaf())
                .visuallyImpaired(leisureSports.getVisual_impaired())
                .mobilityWeak(leisureSports.getMobility_weak())
                .old(leisureSports.getOld())
                .infant(leisureSports.getInfant())
                .isLiked(liked)
                .firstImage(leisureSports.getFirstimage().equals("0") ? leisureSports.getFirstimage2() : leisureSports.getFirstimage())
                .homepage(leisureSports.getHomepage())
                .mapX(leisureSports.getMapx())
                .mapY(leisureSports.getMapy())
                .mLevel(leisureSports.getMlevel())
                .barrier(new BarrierDto().of(barrier))
                // 상세정보
                .accomCount(leisureSports.getAccomcountleports())
                .isBabyCarriage(leisureSports.getChkbabycarriageleports())
                .isPet(leisureSports.getChkpetleports())
                .expAgeRange(leisureSports.getExpagerangeleports())
                .commonParking(leisureSports.getParkingleports())
                .parkingFee(leisureSports.getParkingfeeleports())
                .infoCenter(leisureSports.getInfocenterleports())
                .openPeriod(leisureSports.getOpenperiod())
                .reservation(leisureSports.getReservation())
                .restDate(leisureSports.getRestdateleports())
                .useFee(leisureSports.getUsefeeleports())
                .useTime(leisureSports.getUsetimeleports())
                .build();
    }
}
