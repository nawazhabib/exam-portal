package com.examportal.service;

import com.examportal.exception.UserNotFountException;
import com.examportal.model.User;
import com.examportal.model.UserRole;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.util.Set;

public interface UserService {

    // create user
    public User createUser(User user, Set<UserRole> userRoles) throws Exception;

    //    get user by user name
    public User getUser(String username);

    //    delete user by id
    public void deleteUser(Long ID);

    //update user
    public User updateUser(User user, long userId);

//    send email verification code
    public void sendVerificationEmail (User user, String siteURL) throws MessagingException, UnsupportedEncodingException;

//    verify user
    public boolean verify(String verificationCode);

//    update reset password
    public void updateResetPasswordToken(String token, String email) throws UserNotFountException;

    public User getResetPasswordToken(String resetToken);

    public void updatePassword(User user, String newPassword);


}
