package com.dawool.api.error;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.http.ResponseEntity;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
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