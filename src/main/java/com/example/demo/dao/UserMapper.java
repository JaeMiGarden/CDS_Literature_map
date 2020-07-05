package com.example.demo.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.dto.UserDto;

public interface UserMapper{
	public void insertUser(UserDto user);
	public void updateUser(UserDto user);
	public void deleteUser (String userId);
	public UserDto selectOneUser(String userId);
	public List<UserDto> selectAllUser();
}
