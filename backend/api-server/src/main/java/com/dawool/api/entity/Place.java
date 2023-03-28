package com.dawool.api.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

/**
 * 북마크 DB에 장소 Entity
 *
 * @author 김정은
 */

@Getter
@Setter
@Builder
public class Place {
    private int contentid;
    private int contenttypeid;
    private String title;
    private String firstimage;
    private String category;
    private int mobilityweak;
    private int visual_impaired;
    private int deaf;
    private int old;
    private int infant;
}
