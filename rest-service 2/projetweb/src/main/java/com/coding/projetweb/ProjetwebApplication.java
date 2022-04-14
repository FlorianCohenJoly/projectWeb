package com.coding.projetweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.coding.projetweb")
public class ProjetwebApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjetwebApplication.class, args);
	}

}
