/*
 * RentMe.java
 * 
 * Main Application.
 */
package com.cmsc495;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
public class RentMeApplication {

	public static void main(String[] args) {
		SpringApplication.run(RentMeApplication.class, args);
	}
	
	@RequestMapping(value = "/{path:[^\\.]*}")
	public String redirect() {
		// Forward to home page so that route is preserved.
		return "forward:/";
	}
}
