package com.example.demo.board;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BoardMapper {
	List<Board> getBoardList();
	Board boardDetail(int board_number);
	int boardInsert(Board board);
	int boardUpdate(Board board);
	int boardDelete(int board_number);
	
}
