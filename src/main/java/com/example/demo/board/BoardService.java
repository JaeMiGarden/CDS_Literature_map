package com.example.demo.board;

import java.util.List;

public interface BoardService {
	List<Board> getBoardList();
	Board boardDetail(int board_number);
	int boardInsert(Board board);
	int boardUpdate(Board board);
	int boardDelete(int board_number);
	
}