/*
 * MvcConfig.java
 * 
 * Controllers for pages/API points that do not need a specific controller.
 * All pages should forward to index.html to use partials with Angular.
 */
package com.cmsc495;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter {
	
	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("index");
		registry.addViewController("/user").setViewName("forward:index.html");
		registry.addViewController("/admin").setViewName("forward:index.html");
	}
	
}
