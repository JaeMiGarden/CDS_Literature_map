package com.example.demo.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardServiceImpl implements BoardService {
	
	@Autowired
	BoardMapper boardMapper;
	
	@Override
	public List<Board> getBoardList(){
		return boardMapper.getBoardList();
	}
	
	@Override 
	public Board boardDetail(int boardNumber) {
		return boardMapper.boardDetail(boardNumber);
	}
	
	@Override
	public int boardInsert(Board board) {
		return boardMapper.boardInsert(board);
	}
	
	@Override
	public int boardUpdate(Board board) {
		return boardMapper.boardUpdate(board);
	}
	
	@Override
	public int boardDelete(int boardNumber) {
		return boardMapper.boardDelete(boardNumber);
	}
}
