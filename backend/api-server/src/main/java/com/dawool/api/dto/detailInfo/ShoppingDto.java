package com.dawool.api.dto.detailInfo;

import com.dawool.api.code.Category;
import com.dawool.api.entity.Barrier;
import com.dawool.api.entity.Shopping;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 쇼핑(38) 관련 정보
 *
 * @author 김정은
 */

@Getter
@Setter
@NoArgsConstructor
public class ShoppingDto extends CommonInfoDto{

    // 유모차 대여 여부
    private int isBabyCarriage;
    // 신용카드 가능 여부
    private String isCreditCard;
    // 애완동물 동반 여부
    private int isPet;
    // 장서는 날
    private String fairDay;
    // 문의 및 안내
    private String infoCenter;
    // 영업시간
    private String openTime;
    // 주차시설
    private String commonParking;
    // 쉬는 날
    private String restDate;
    // 화장실 시설
    private String restroom;
    // 판매 품목
    private String saleItem;
    // 매장 안내
    private String shopGuide;

    @Builder
    public ShoppingDto(String spotId, int contentId, int contentTypeId, String title, String category, String homepage, String firstImage,
                       int areaCode, String addr1, double mapX, double mapY, float mLevel,
                       int deaf, int visuallyImpaired, int mobilityWeak, int old, int infant, boolean isLiked, int hit, BarrierDto barrier,
                       int isBabyCarriage, String isCreditCard, int isPet, String fairDay, String infoCenter, String openTime,
                       String commonParking, String restDate, String restroom, String saleItem, String shopGuide) {
        super(spotId, contentId, contentTypeId, title, category, homepage, firstImage, areaCode, addr1, mapX, mapY, mLevel, deaf, visuallyImpaired, mobilityWeak, old, infant, isLiked, hit, barrier);
        this.isBabyCarriage = isBabyCarriage;
        this.isCreditCard = isCreditCard;
        this.isPet = isPet;
        this.fairDay = fairDay;
        this.infoCenter = infoCenter;
        this.openTime = openTime;
        this.commonParking = commonParking;
        this.restDate = restDate;
        this.restroom = restroom;
        this.saleItem = saleItem;
        this.shopGuide = shopGuide;
    }

    public ShoppingDto of(Shopping shopping, Barrier barrier, boolean liked){
        return ShoppingDto.builder()
                .spotId(shopping.getId())
                // 공통정보
                .contentId(shopping.getContentid())
                .contentTypeId(shopping.getContenttypeid())
                .addr1(shopping.getAddr1())
                .title(shopping.getTitle())
                .category(Category.valueOf(shopping.getCat3()).getCategory())
                .deaf(shopping.getDeaf())
                .visuallyImpaired(shopping.getVisual_impaired())
                .mobilityWeak(shopping.getMobility_weak())
                .old(shopping.getOld())
                .infant(shopping.getInfant())
                .isLiked(liked)
                .firstImage(shopping.getFirstimage())
                .homepage(shopping.getHomepage())
                .mapX(shopping.getMapx())
                .mapY(shopping.getMapy())
                .mLevel(shopping.getMlevel())
                .barrier(new BarrierDto().of(barrier))
                // 상세정보
                .isBabyCarriage(shopping.getChkbabycarriageshopping())
                .isCreditCard(shopping.getChkcreditcardshopping())
                .isPet(shopping.getChkpetshopping())
                .fairDay(shopping.getFairday())
                .commonParking(shopping.getParkingshopping())
                .infoCenter(shopping.getInfocentershopping())
                .openTime(shopping.getOpentime())
                .restDate(shopping.getRestdateshopping())
                .restroom(shopping.getRestroom())
                .saleItem(shopping.getSaleitem())
                .shopGuide(shopping.getShopguide())
                .build();
    }
}
