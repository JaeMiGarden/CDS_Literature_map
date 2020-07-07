package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.dto.MemberDto;
import com.example.demo.service.MemberService;

import lombok.AllArgsConstructor;

@Controller
@AllArgsConstructor
public class MemberController {
	private MemberService memberService;
	
	@GetMapping("/") // 메인페이지
	public String index() {
		return "/index";
	}
	
	@GetMapping("/user/signup") // Sign up Page
	public String dispSignup() {
		return "/signup";
	}

	@PostMapping("/user/signup") // Signup Processing
	public String execSignup(MemberDto memberDto) {
		memberService.joinUser(memberDto);
		
		return "redirect:/user/login";
	}
	
	// Login Page
	@GetMapping("/user/login")
	public String dispLogin() {
		return "/login";
	}
	
	// Login Result Page
	@GetMapping("/user/login/result")
	public String dispLoginResult() {
		return "/loginSuccess";
	}
	
	// Logout Result Page
	@GetMapping("/user/logout/result")
	public String dispLogout() {
		return "/logout";
	}
	
	// Access Denied Page
	@GetMapping("/user/denied")
	public String dispDenied() {
		return "/denied";
	}
	
	// My Info Page
	@GetMapping("/user/info")
	public String dispMyInfo() {
		return "/myinfo";
	}
	
	@GetMapping("/admin")
	public String dispAdmin() {
		return "/admin";
	}
	
	
}
