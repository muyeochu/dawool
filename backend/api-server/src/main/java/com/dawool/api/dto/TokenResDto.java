package com.dawool.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 액세스 토큰, 리프래시 토큰 생성 응답 DTO
 *
 * @author 이준
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TokenResDto {

    private String nickName;
    private boolean isSurveyed;
    private String grantType;
    private String accessToken;
    private String refreshToken;
    private long accessTokenExpiresIn;
}
