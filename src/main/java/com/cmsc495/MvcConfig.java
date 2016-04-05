/*
 * MvcConfig.java
 * 
 * Controllers for pages/API points that do not need a specific controller.
 * All pages should forward to index.html to use partials with Angular.
 */
package com.cmsc495;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter {
	
	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("index");
		registry.addViewController("/about").setViewName("forward:index.html");
	}
	
}
