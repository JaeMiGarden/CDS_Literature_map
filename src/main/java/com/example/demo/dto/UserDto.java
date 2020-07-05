package com.example.demo.dto;

public class UserDto {
	private String userId;
	private String userPw;
	private String userName;
	private String userNumber;
	
	public String getUserId() {
		return this.userId;
	} 
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserPw() {
		return this.userPw;
	}
	public void setUserPw(String Pw) {
		this.userPw = Pw;
	}
	public String getUserName() {
		return this.userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserNumber () {
		return this.userNumber;
	}
	public void setUserNumber(String userNumber) {
		this.userNumber = userNumber;
	}
	@Override
	public String toString() {
		return "UserDto [userId=" + this.userId + ", userPw=" + this.userPw + ", userName=" +
	this.userName + ", userNumber=" + userNumber + "]";

	}
}
