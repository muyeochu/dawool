package com.dawool.api.dto.detailInfo;

import com.dawool.api.code.Category;
import com.dawool.api.entity.Barrier;
import com.dawool.api.entity.CultureFacility;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 문화시설(14) 관련 정보
 *
 * @author 김정은
 */

@Getter
@Setter
@NoArgsConstructor
public class CultureFacilityDto extends CommonInfoDto{

    private float isBabyCarriage;
    private float isPet;
    private String discountInfo;
    private String infoCenter;
    private String commonParking;
    private String parkingFee;
    private String restDate;
    private String useFee;
    private String useTime;
    private String spendTime;

    @Builder
    public CultureFacilityDto(String spotId, int contentId, int contentTypeId, String title, String category, String homepage, String firstImage,
                              int areaCode, String addr1, float mapX, float mapY, float mLevel, int deaf, int visuallyImpaired, int mobilityWeak, int old, int infant, boolean isLiked, int hit, BarrierDto barrier,
                              float isBabyCarriage, float isPet, String discountInfo, String infoCenter, String commonParking, String parkingFee, String restDate, String useFee, String useTime, String spendTime) {
        super(spotId, contentId, contentTypeId, title, category, homepage, firstImage, areaCode, addr1, mapX, mapY, mLevel, deaf, visuallyImpaired, mobilityWeak, old, infant, isLiked, hit, barrier);
        this.isBabyCarriage = isBabyCarriage;
        this.isPet = isPet;
        this.discountInfo = discountInfo;
        this.infoCenter = infoCenter;
        this.commonParking = commonParking;
        this.parkingFee = parkingFee;
        this.restDate = restDate;
        this.useFee = useFee;
        this.useTime = useTime;
        this.spendTime = spendTime;
    }

    public CultureFacilityDto of(CultureFacility cultureFacility, Barrier barrier, boolean liked){
        return CultureFacilityDto.builder()
                .spotId(cultureFacility.getId())
                // 공통정보
                .contentId(cultureFacility.getContentid())
                .addr1(cultureFacility.getAddr1())
                .title(cultureFacility.getTitle())
                .category(Category.valueOf(cultureFacility.getCat3()).getCategory())
                .deaf(cultureFacility.getDeaf())
                .visuallyImpaired(cultureFacility.getVisual_impaired())
                .mobilityWeak(cultureFacility.getMobility_weak())
                .old(cultureFacility.getOld())
                .infant(cultureFacility.getInfant())
                .isLiked(liked)
                .firstImage(cultureFacility.getFirstimage())
                .homepage(cultureFacility.getHomepage())
                .mapX(cultureFacility.getMapx())
                .mapY(cultureFacility.getMapy())
                .mLevel(cultureFacility.getMlevel())
                .barrier(new BarrierDto().of(barrier))
                // 상세정보
                .isBabyCarriage(cultureFacility.getChkbabycarriageculture())
                .isPet(cultureFacility.getChkpetculture())
                .discountInfo(cultureFacility.getDiscountinfo())
                .commonParking(cultureFacility.getParkingculture())
                .parkingFee(cultureFacility.getParkingfee())
                .infoCenter(cultureFacility.getInfocenterculture())
                .restDate(cultureFacility.getRestdateculture())
                .useFee(cultureFacility.getUsefee())
                .useTime(cultureFacility.getUsetimeculture())
                .spendTime(cultureFacility.getSpendtime())
                .build();
    }
}
