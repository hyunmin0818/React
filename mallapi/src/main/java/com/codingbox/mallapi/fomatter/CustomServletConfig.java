package com.codingbox.mallapi.fomatter;

import com.codingbox.mallapi.dto.TodoDTO;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Map;

import static sun.security.ssl.SSLLogger.info;

@Configuration
public class CustomServletConfig implements WebMvcConfigurer {
    @Override
    public void addFormatters(FormatterRegistry registry) {
        log.info("-----------addFormatters---------");

        registry.addFormatter(new LoaclDateFomatter());
    }

    @PostMapping("/")
    public Map<String, Long> register(@RequestBody TodoDTO dto){
        log,info("todoDTO: " + dto);
                Long tno = todoService.register(dto);
        return Map.of("TNO", tno);
    }
    @PutMapping("/{tno}")
    public Map<String, Long> update(@PathVariable("tno") Long tno, @RequestBody TodoDTO dto){
        todoDTO.setTno(tno);
        todoService.modify(todoDTO);
        return Map.of("TNO", tno);
    }

    @DeleteMapping("/{tno")
    public Map<String, Long> delete(@PathVariable("tno") Long tno){
        todoService.remove(tmo);
        return Map.of("TNO", tno);
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 어느 경로에 cors를 적용하는지? 모든경로
                .maxAge(500) // 서버 연결 유효시간
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedOrigins("*"); // 어느경로에서 들어오는것을 허용하는지? 모든경로
    }
}
