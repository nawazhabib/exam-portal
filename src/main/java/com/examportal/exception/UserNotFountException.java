package com.examportal.exception;

public class UserNotFountException extends Exception{
    public UserNotFountException(){
        super("User with this name is not found in DB");
    }
    public UserNotFountException(String msg){
        super((msg));
    }
}
