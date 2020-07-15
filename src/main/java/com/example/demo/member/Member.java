package com.example.demo.member;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString
public class Member {

    @Id @GeneratedValue
    private Long memberId;

    private String memberNumber;
    
    private String memberName;

    private String password; 

    public Member(String memberNumber, String memberName, String password) {
    	this.memberNumber = memberNumber;
    	this.memberName = memberName;
    	this.password = password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}