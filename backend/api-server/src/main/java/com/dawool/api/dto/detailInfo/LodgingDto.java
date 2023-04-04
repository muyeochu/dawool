package com.dawool.api.dto.detailInfo;

import com.dawool.api.code.Category;
import com.dawool.api.entity.Barrier;
import com.dawool.api.entity.Lodging;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 숙박(32) 관련 정보
 *
 * @author 김정은
 */
@Getter
@Setter
@NoArgsConstructor
public class LodgingDto extends CommonInfoDto{

    // 입실시간
    private String checkInTime;
    // 퇴실시간
    private String checkOutTime;
    // 취사 여부
    private String isCooking;
    // 식음료장
    private String foodPlace;
    // 한옥 여부
    private float hanok;
    // 문의 및 안내
    private String infoCenter;
    // 주차시설
    private String commonParking;
    // 픽업서비스
    private String pickup;
    // 예약 홈페이지
    private String reservationUrl;
    // 부대시설
    private String subFacility;
    // 바베큐장 여부
    private float barbecue;
    // 피트니스 여부
    private float fitness;
    // 음료장 여부
    private float beverage;
    // 자전거 대여 여부
    private float bicycle;
    // 캠프파이어 여부
    private float campfire;
    // 노래방 여부
    private float karaoke;
    // 공용 샤워실 여부
    private float publicBath;
    // 공용 PC방 여부
    private float publicPc;
    // 사우나실
    private float sauna;
    // 스포츠센터
    private float sports;
    // 환불규정
    private String refundRegulation;

    @Builder
    public LodgingDto(String spotId, int contentId, int contentTypeId, String title, String category, String homepage, String firstImage,
                      int areaCode, String addr1, double mapX, double mapY, float mLevel, int deaf, int visuallyImpaired, int mobilityWeak, int old, int infant, boolean isLiked, int hit, BarrierDto barrier,
                      String checkInTime, String checkOutTime, String isCooking, String foodPlace, float hanok, String infoCenter, String commonParking, String pickup, String reservationUrl,
                      String subFacility, float barbecue, float fitness, float beverage, float bicycle, float campfire, float karaoke, float publicBath, float publicPc, float sauna, float sports, String refundRegulation) {
        super(spotId, contentId, contentTypeId, title, category, homepage, firstImage, areaCode, addr1, mapX, mapY, mLevel, deaf, visuallyImpaired, mobilityWeak, old, infant, isLiked, hit, barrier);
        this.checkInTime = checkInTime;
        this.checkOutTime = checkOutTime;
        this.isCooking = isCooking;
        this.foodPlace = foodPlace;
        this.hanok = hanok;
        this.infoCenter = infoCenter;
        this.commonParking = commonParking;
        this.pickup = pickup;
        this.reservationUrl = reservationUrl;
        this.subFacility = subFacility;
        this.barbecue = barbecue;
        this.fitness = fitness;
        this.beverage = beverage;
        this.bicycle = bicycle;
        this.campfire = campfire;
        this.karaoke = karaoke;
        this.publicBath = publicBath;
        this.publicPc = publicPc;
        this.sauna = sauna;
        this.sports = sports;
        this.refundRegulation = refundRegulation;
    }

    /**
     * Entity -> DTO
     *
     * @param lodging
     * @param barrier
     * @return
     */
    public LodgingDto of(Lodging lodging, Barrier barrier, boolean liked) {
        return LodgingDto.builder()
                .spotId(lodging.getId())
                // 공통정보
                .contentId(lodging.getContentid())
                .contentTypeId(lodging.getContenttypeid())
                .addr1(lodging.getAddr1().equals("0") ? lodging.getAddr2() : lodging.getAddr1())
                .title(lodging.getTitle())
                .category(Category.valueOf(lodging.getCat3()).getCategory())
                .deaf(lodging.getDeaf())
                .visuallyImpaired(lodging.getVisual_impaired())
                .mobilityWeak(lodging.getMobility_weak())
                .old(lodging.getOld())
                .infant(lodging.getInfant())
                .isLiked(liked)
                .firstImage(lodging.getFirstimage().equals("0") ? lodging.getFirstimage2() : lodging.getFirstimage())
                .homepage(lodging.getHomepage())
                .mapX(lodging.getMapx())
                .mapY(lodging.getMapy())
                .mLevel(lodging.getMlevel())
                .barrier(new BarrierDto().of(barrier))
                // 상세정보
                .checkInTime(lodging.getCheckintime())
                .checkOutTime(lodging.getCheckouttime())
                .isCooking(lodging.getChkcooking())
                .foodPlace(lodging.getFoodplace())
                .commonParking(lodging.getParkinglodging())
                .infoCenter(lodging.getInfocenterlodging())
                .fitness(lodging.getFitness())
                .barbecue(lodging.getBarbecue())
                .bicycle(lodging.getBicycle())
                .beverage(lodging.getBeverage())
                .campfire(lodging.getCampfire())
                .hanok(lodging.getHanok())
                .karaoke(lodging.getKaraoke())
                .publicBath(lodging.getPublicbath())
                .publicPc(lodging.getPublicpc())
                .reservationUrl(lodging.getReservationurl())
                .refundRegulation(lodging.getRefundregulation())
                .sauna(lodging.getSauna())
                .sports(lodging.getSports())
                .subFacility(lodging.getSubfacility())
                .pickup(lodging.getPickup())
                .build();
    }
}
