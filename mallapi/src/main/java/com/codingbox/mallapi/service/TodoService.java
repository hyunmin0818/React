package com.codingbox.mallapi.service;

import com.codingbox.mallapi.domain.Todo;
import com.codingbox.mallapi.dto.PageRequestDTO;
import com.codingbox.mallapi.dto.PageResponseDTO;
import com.codingbox.mallapi.dto.TodoDTO;

public interface TodoService {
    TodoDTO get(Long tno);

    Long register(TodoDTO todoDTO);

    void modify(TodoDTO dto);

    void remove(Long tno);

    PageResponseDTO<TodoDTO> getList(PageRequestDTO pageRequestDTO);

    /*
     * default 키워드
     * 메소드를 default 키워드를 사용해서 선언함으로써 메소드의 body,
     * 즉 구현부를 작성할 수 있게 되었다.
     */

    // entity를 DTO로 변환

    default TodoDTO entityToDto(Todo todo){
        TodoDTO todoDTO = new TodoDTO();
        todoDTO.setTno(todoDTO.getTno());
        todoDTO.setTitle(todoDTO.getTitle());
        todoDTO.setContent(todoDTO.getContent());
        todoDTO.setWriter(todoDTO.getWriter());
        todoDTO.setComplete(todoDTO.isComplete());
        todoDTO.setDueDate(todoDTO.getDueDate());

        return todoDTO;
    }
    default Todo dtoToEntity(TodoDTO todoDTO){
        Todo todo = new Todo();

        todo.setTno(todoDTO.getTno());
        todo.setTitle(todoDTO.getTitle());
        todo.setContent(todoDTO.getContent());
        todo.setWriter(todoDTO.getWriter());
        todo.setDueDate(todoDTO.getDueDate());
        todo.setComplete(todoDTO.isComplete());
        return todo;
    }
}
