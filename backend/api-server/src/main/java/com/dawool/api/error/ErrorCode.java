package com.dawool.api.error;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    ID_EXISTS(HttpStatus.UNAUTHORIZED, "이미 사용중인 아이디입니다."),
    USER_NOT_FOUND(HttpStatus.UNAUTHORIZED, "해당하는 정보의 사용자를 찾을 수 없습니다."),
    INVALID_PASSWORD(HttpStatus.UNAUTHORIZED, "비밀번호가 일치하지 않습니다."),
    LOGIN_REQUIRED(HttpStatus.FORBIDDEN, "로그인이 필요한 페이지입니다."),
    NOT_ADMIN(HttpStatus.FORBIDDEN, "관리자만 사용가능한 기능입니다."),
    NULL_VALUE(HttpStatus.INTERNAL_SERVER_ERROR, "값이 존재하지 않습니다."),
    SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "서버 오류입니다."),
    INVALID_TOKEN(HttpStatus.UNAUTHORIZED, "유효하지 않은 토큰입니다."),
    UNAUTHORIZED(HttpStatus.UNAUTHORIZED, "유효하지 않은 토큰입니다.")
    ;

    private final HttpStatus status;
    private final String message;
}
