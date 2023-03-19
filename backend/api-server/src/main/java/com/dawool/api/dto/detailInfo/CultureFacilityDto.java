package com.dawool.api.dto.detailInfo;

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

    private boolean chkbabycarriageculture;
    private boolean chkpetculture;
    private String discountinfo;
    private String infocenterculture;
    private String parkingculture;
    private String parkingfee;
    private String restdateculture;
    private String usefee;
    private String usetimeculture;
    private String spendtime;
}
