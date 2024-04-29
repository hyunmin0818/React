package com.codingbox.mallapi.advice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import static com.fasterxml.jackson.databind.type.LogicalType.Map;

// 공통으로 처리할 Advice Class
@RestController
public class CustomControllerAdvice {

    @ExceptionHandler(NoSuchFieldException.class)
    public ResponseEntity<?> notExsit(NoSuchFieldException e){
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of("msg",e.getMessage()));

    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> notExsit(MethodArgumentNotValidException e){
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(Map.of("msg", e.getMessage()));

    }

}
