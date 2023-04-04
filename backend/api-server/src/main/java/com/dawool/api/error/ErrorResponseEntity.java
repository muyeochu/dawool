package com.dawool.api.error;

import lombok.Builder;
import org.springframework.http.ResponseEntity;

@Builder
public class ErrorResponseEntity {
    private int status;
    private String code;
    private String message;

    public static ResponseEntity<ErrorResponseEntity> error(ErrorCode e) {
        return ResponseEntity.status(e.getStatus())
                .body(ErrorResponseEntity.builder().status(e.getStatus().value()).code(e.name()).message(e.getMessage()).build());
    }
}