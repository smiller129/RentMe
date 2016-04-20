/*
 * GreetingController.java
 * 
 * Returns either the given name or "CMSC495".
 * To return a name other than the default, use /greeting?name=<name>
 * Example to display "Welcome Class" use /greeting?name=Class
 */
package com.cmsc495;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class GreetingController {

    private static final String template = "%s";

    @RequestMapping("/getGreeting")
    public @ResponseBody Greeting getGreeting(@RequestParam(required=false, defaultValue="CMSC495") String name) {
        return new Greeting(String.format(template, name));
    }

}