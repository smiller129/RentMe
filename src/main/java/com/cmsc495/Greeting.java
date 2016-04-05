/**
 * Greeting.java
 * 
 * Simple object returned by GreetingController.
 */
package com.cmsc495;

public class Greeting {
	public String content;
	
	public Greeting(String content) {
		this.content = content;
	}
	
	public String getContent() {
		return content;
	}
}
