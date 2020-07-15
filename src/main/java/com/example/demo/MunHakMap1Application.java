package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;

//@SpringBootApplication(exclude= {ErrorMvcAutoConfiguration.class})
@SpringBootApplication
public class MunHakMap1Application {

	public static void main(String[] args) {
		SpringApplication.run(MunHakMap1Application.class, args);
	}

}
