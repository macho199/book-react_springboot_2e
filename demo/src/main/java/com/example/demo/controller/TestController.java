package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ResponseDTO;
import com.example.demo.dto.TestRequestBodyDTO;

@RestController
@RequestMapping("/test") //리소스
public class TestController {
    /**
     * PathVariable example
     * @param id
     * @return
     */
    // @GetMapping("/{id}")
    // public String testController(@PathVariable(required = false) int id) {
    //     return "Hello World" + id;
    // }
    
    /**
     * RequestParam example
     * @param id
     * @return
     */
    // @GetMapping
    // public String testController(@RequestParam(required=false) int id) {
    //     return "Hello World" + id;
    // }

    /**
     * RequestBody example
     * @param testRequestBodyDTO
     * @return
     */
    // @GetMapping
    // public String testController(@RequestBody TestRequestBodyDTO testRequestBodyDTO) {
    //     return "Hello World Id: " + testRequestBodyDTO.getId() + " message: " + testRequestBodyDTO.getMessage();
    // }

    /**
     * ResponseBody example
     * @return
     */
    // @GetMapping
    // public ResponseDTO<String> testController() {
    //     List<String> list = new ArrayList<>();
    //     list.add("Hello World! i'm ResponseDTO");
    //     ResponseDTO<String> response = ResponseDTO.<String>builder().data(list).build();
    //     return response;
    // }
    
    /**
     * ResponseEntity example
     * @return
     */
    @GetMapping
    public ResponseEntity<?> testController() {
        List<String> list = new ArrayList<>();
        list.add("Hello World! i'm ResponseEntity, And you got 404!");
        ResponseDTO<String> response = ResponseDTO.<String>builder().data(list).build();
        return ResponseEntity.badRequest().body(response);
    }
}
