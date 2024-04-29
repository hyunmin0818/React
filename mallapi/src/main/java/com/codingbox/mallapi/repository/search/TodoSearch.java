package com.codingbox.mallapi.repository.search;

import com.codingbox.mallapi.dto.PageRequestDTO;
import org.springframework.data.domain.Page;

import com.codingbox.mallapi.domain.Todo;

public interface TodoSearch {
	Page<Todo> search(PageRequestDTO responseDTO);
	
}
