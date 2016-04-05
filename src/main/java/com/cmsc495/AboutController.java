package com.cmsc495;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AboutController {

    @RequestMapping("/getMembers")
    public @ResponseBody String[] getMembers() {
        String[] members = {"Joshua Dendy", "Steven Miller", "Daniel Rogers", "Jeffrey Wentz" };
        return members;
    }

}