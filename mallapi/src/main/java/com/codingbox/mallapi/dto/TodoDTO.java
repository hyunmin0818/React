package com.codingbox.mallapi.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TodoDTO {
    private long tno;
    private String title;
    private String content;
    private String Writer;
    private boolean complete; // boolean은 is로 처리
    private LocalDate dueDate;

}
