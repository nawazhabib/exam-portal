package com.examportal.exception;

public class UserFoundException extends Exception{
    public UserFoundException(){
        super("User is already present with this name, try with another name");
    }
    public UserFoundException(String msg){
        super((msg));
    }
}
