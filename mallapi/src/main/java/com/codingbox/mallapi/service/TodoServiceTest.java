package com.codingbox.mallapi.service;

import com.codingbox.mallapi.dto.TodoDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

@SpringBootTest
@Log4j2
public class TodoServiceTest {

    @Autowired
    TodoService todoService;

//    @Test
    void testGet(){
        Long tno = 100L;
        log.info(todoService.get(tno));
    }

    @Test
    public void testRegister(){
        TodoDTO todoDTO = new TodoDTO();
        todoDTO.setTitle("test title");
        todoDTO.setContent("test content");
        todoDTO.setTitle("test title");
        todoDTO.setWriter("test writer");
        todoDTO.setDueDate(LocalDate.of(2024, 04, 29));
        log.info(todoService.register(todoDTO));
    }
}
