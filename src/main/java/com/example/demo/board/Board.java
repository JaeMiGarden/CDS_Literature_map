package com.example.demo.board;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor 
public class Board {
	private int boardNumber;
	private String title;
	private String content;
	private String writer;
	private Date writeDate;
	
}
