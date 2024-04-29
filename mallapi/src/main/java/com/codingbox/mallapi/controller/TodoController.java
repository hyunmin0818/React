package com.codingbox.mallapi.controller;

import com.codingbox.mallapi.dto.PageRequestDTO;
import com.codingbox.mallapi.dto.PageResponseDTO;
import com.codingbox.mallapi.dto.TodoDTO;
import com.codingbox.mallapi.service.TodoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Log4j2
@RequiredArgsConstructor
@RequestMapping("/api/todo")

public class TodoController {
    private final TodoService todoService;

    @GetMapping("/{tno}")
    public TodoDTO getMethodName(@PathVariable("tno") Long tno) {
        return todoService.get(tno);
    }

    @GetMapping("/list")
    public PageResponseDTO<TodoDTO> list(PageResponseDTO responseDTO) {
        return todoService.getList(PageRequestDTO);
    }
}
