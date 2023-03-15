package com.dawool.api.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReissueTokenReqDto {
    private String grantType;
    private String refreshToken;
}
