package com.dawool.api.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * 문화시설(14) 관련 정보
 *
 * @author 김정은
 */
@Getter
@Setter
@Document(collection = "culture_facility")
public class CultureFacility extends CommonInfo{

    private float chkbabycarriageculture;
    private float chkpetculture;
    private String discountinfo;
    private String infocenterculture;
    private String parkingculture;
    private String parkingfee;
    private String restdateculture;
    private String usefee;
    private String usetimeculture;
    private String spendtime;
}
