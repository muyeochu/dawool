package com.dawool.api.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * 무장애 정보
 *
 * @author 김정은
 */

@Getter
@Setter
@ToString
@Document(collection = "barrier_free_store")
public class Barrier {
    @Id
    private String id;
    private int contentid;
    private String parking;
    private String route;
    private String publictransport;
    private String ticketoffice;
    private String promotion;
    private String wheelchair;
    private String exit;
    private String elevator;
    private String restroom;
    private String auditorium;
    private String room;
    private String handicapetc;
    private String braileblock;
    private String helpdog;
    private String guidehuman;
    private String audioguide;
    private String bigprint;
    private String brailepromotion;
    private String guidesystem;
    private String blindhandicapetc;
    private String signguide;
    private String videoguide;
    private String hearingroom;
    private String hearinghandicapetc;
    private String stroller;
    private String lactationroom;
    private String babysparechair;
    private String infantsfamilyetc;
}
