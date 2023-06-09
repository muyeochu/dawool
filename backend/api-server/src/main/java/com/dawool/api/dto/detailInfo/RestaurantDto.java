package com.dawool.api.dto.detailInfo;

import com.dawool.api.code.Category;
import com.dawool.api.entity.Barrier;
import com.dawool.api.entity.Restaurant;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * 식당(39) 정보
 *
 * @author 김정은
 */
@Getter
@Service
@NoArgsConstructor
public class RestaurantDto extends CommonInfoDto{

    // 신용카드 가능 여부
    private int isCreditCard;
    // 대표메뉴
    private String firstMenu;
    // 문의 및 안내
    private String infoCenter;
    // 어린이 놀이방 시설 여부
    private float kidsFacility;
    // 영업시간
    private String openTime;
    // 포장 가능 여부
    private String packing;
    // 주차시설
    private String commonParking;
    // 예약 안내
    private String reservation;
    // 쉬는 날
    private String restDate;
    // 판매 메뉴
    private String treatMenu;

    @Builder
    public RestaurantDto(String spotId, int contentId, int contentTypeId, String title, String category, String homepage, String firstImage,
                         int areaCode, String addr1, double mapX, double mapY, float mLevel,
                         int deaf, int visuallyImpaired, int mobilityWeak, int old, int infant, boolean isLiked, int hit, BarrierDto barrier,
                         int isCreditCard, String firstMenu, String infoCenter, float kidsFacility, String openTime, String packing,
                         String commonParking, String reservation, String restDate, String treatMenu) {
        super(spotId, contentId, contentTypeId, title, category, homepage, firstImage, areaCode, addr1, mapX, mapY, mLevel, deaf, visuallyImpaired, mobilityWeak, old, infant, isLiked, hit, barrier);
        this.isCreditCard = isCreditCard;
        this.firstMenu = firstMenu;
        this.infoCenter = infoCenter;
        this.kidsFacility = kidsFacility;
        this.openTime = openTime;
        this.packing = packing;
        this.commonParking = commonParking;
        this.reservation = reservation;
        this.restDate = restDate;
        this.treatMenu = treatMenu;
    }

    /**
     * Entity -> DTO
     *
     * @param restaurant
     * @param barrier
     * @return
     */
    public RestaurantDto of(Restaurant restaurant, Barrier barrier, boolean liked){
        return RestaurantDto.builder()
                .spotId(restaurant.getId())
                // 공통정보
                .contentId(restaurant.getContentid())
                .contentTypeId(restaurant.getContenttypeid())
                .addr1(restaurant.getAddr1().equals("0") ? restaurant.getAddr2() : restaurant.getAddr1())
                .title(restaurant.getTitle())
                .category(Category.valueOf(restaurant.getCat3()).getCategory())
                .deaf(restaurant.getDeaf())
                .visuallyImpaired(restaurant.getVisual_impaired())
                .mobilityWeak(restaurant.getMobility_weak())
                .old(restaurant.getOld())
                .infant(restaurant.getInfant())
                .isLiked(liked)
                .firstImage(restaurant.getFirstimage().equals("0") ? restaurant.getFirstimage2() : restaurant.getFirstimage())
                .homepage(restaurant.getHomepage())
                .mapX(restaurant.getMapx())
                .mapY(restaurant.getMapy())
                .mLevel(restaurant.getMlevel())
                .barrier(new BarrierDto().of(barrier))

                // 상세정보
                .isCreditCard(restaurant.getChkcreditcardfood())
                .infoCenter(restaurant.getInfocenterfood())
                .commonParking(restaurant.getPacking())
                .firstMenu(restaurant.getFirstmenu())
                .restDate(restaurant.getRestdatefood())
                .reservation(restaurant.getReservationfood())
                .openTime(restaurant.getOpentimefood())
                .packing(restaurant.getPacking())
                .kidsFacility(restaurant.getKidsfacility())
                .treatMenu(restaurant.getTreatmenu())
                .build();
    }
}
