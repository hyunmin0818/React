package com.codingbox.mallapi.repository.search;

import com.codingbox.mallapi.dto.PageRequestDTO;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import com.codingbox.mallapi.domain.QTodo;
import com.codingbox.mallapi.domain.Todo;
import com.querydsl.jpa.JPQLQuery;

import lombok.extern.log4j.Log4j2;

import java.util.*;

@Log4j2
public class TodoSearchImpl extends QuerydslRepositorySupport implements TodoSearch  {
	
	public TodoSearchImpl() {
		super(Todo.class);
	}

	// queryDSL작업시작
	@Override
	public Page<Todo> search(PageRequestDTO pageResponseDTO) {
		log.info("============Search==========");
		QTodo todo = QTodo.todo;
		JPQLQuery<Todo> query = from(todo);
//		query.where(todo.title.contains("1"));
		
		// 페이징처리를 QueryDSL의 Pageable로 사용한다.
		Pageable pageable 
		= PageRequest.of(pageResponseDTO.getPage() -1, pageResponseDTO.getSize(),
				Sort.by("tno").descending());
		this.getQuerydsl().applyPagination(pageable, query);		

		List<Todo> list = query.fetch();			// 목록데이터 가지고 올때
		long total = query.fetchCount();		// 주의사항 return Long
		return new PageImpl<>(list, pageable, total);
	}

}







