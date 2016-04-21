package com.cmsc495;

import java.security.Principal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	private Principal principalUser;
	
    @RequestMapping("/userAuth")
    public Principal user(Principal user) {
    	principalUser = user;
    	return user;
    }
    
}