package com.dawool.api.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * 회원 Collection
 *
 * @author 이준
 * @author 김정은
 */

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document("user")
public class User {
    @Id
    private String id;
    private long kakaoId;
    private String nickName;
    private String email;
    private int ageRange;
    private String gender;
    private Survey survey;
    private String role;
    private String refreshToken;
}
