package com.dawool.api.dto;

import lombok.*;

/**
 * 액세스 토큰 재발급 요청 DTO
 *
 * @author 이준
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReissueTokenReqDto {
    private String grantType;
    private String refreshToken;
}
