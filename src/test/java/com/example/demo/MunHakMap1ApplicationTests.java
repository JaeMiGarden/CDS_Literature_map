package com.example.demo;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.example.demo.dao.BoardMapper;
import com.example.demo.dao.UserMapper;
import com.example.demo.dto.BoardDto;
import com.example.demo.dto.UserDto;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class MunHakMap1ApplicationTests {
	
	@Autowired
	private UserMapper uMapper;
	@Autowired
	private BoardMapper bMapper;
	
	@Test
	public void userTest() {
		UserDto user = new UserDto();
		user.setUserId("Test");
		user.setUserPw("test");
		user.setUserName("김재원");
		user.setUserNumber("12345678");
		
		uMapper.insertUser(user);
		System.out.println(uMapper.selectOneUser("test"));
		
	}
	
	@Test
	public void boardTest() {
		BoardDto board = new BoardDto();
		board.setPassword("1234");
		board.setWriter("김재원");
		bMapper.insertBoard(board);
		
		System.out.println(bMapper.selectOneBoard(1));
	}
}
