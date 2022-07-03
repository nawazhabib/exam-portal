package com.examportal.exception;

public class EmailFoundException extends Exception {
    public EmailFoundException() {
        super("Email is already present with this name, try with another name");
    }

    public EmailFoundException(String msg) {
        super((msg));
    }
}
