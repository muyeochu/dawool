package com.dawool.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TokenResDto {

    private String nickName;
    private String grantType;
    private String accessToken;
    private String refreshToken;
    private long accessTokenExpiresIn;
}