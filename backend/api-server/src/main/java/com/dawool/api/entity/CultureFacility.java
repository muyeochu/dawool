package com.dawool.api.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "culture_facility")
public class CultureFacility extends CommonInfo{

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
