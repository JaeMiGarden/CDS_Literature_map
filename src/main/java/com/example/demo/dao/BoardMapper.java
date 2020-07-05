package com.example.demo.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.dto.BoardDto;

public interface BoardMapper {
	public void insertBoard (BoardDto board);
	public void updateBoard (BoardDto board);
	public void deleteBoard (int num);
	public BoardDto selectOneBoard(int num);
	public List<BoardDto> selectSearchBoard (HashMap<String, Object> params);
	public List<BoardDto> selectAllBoard();
}
