package com.examportal.controller;

import com.examportal.configuration.Utility;
import com.examportal.exception.UserNotFountException;
import com.examportal.model.User;
import com.examportal.service.UserService;

import net.bytebuddy.utility.RandomString;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;


@CrossOrigin("*")
@RestController
public class ForgotPasswordController {

    @Autowired
    private UserService userService;

    @Autowired
    private JavaMailSender javaMailSender;

    @GetMapping("/forgot-password")
    public String getForgotPassword() {
        return "this is forgot password controller get method";
    }

    @PostMapping("/forgot-password")
    public String processForgotPassword(@RequestParam String email, HttpServletRequest request) throws UserNotFountException {

        String token = RandomString.make(45);

        try {
            userService.updateResetPasswordToken(token, email);

            String resetPasswordLink = Utility.getSiteUrl(request) + "/reset_password?token=" + token;
            System.out.println(resetPasswordLink);

            sendEmail(email, resetPasswordLink);

        } catch (UserNotFountException | UnsupportedEncodingException | MessagingException e) {
            e.printStackTrace();
        }

        return "Please, check you email";
    }

    //    sending email with reset password token
    private void sendEmail(String email, String resetPasswordLink) throws MessagingException, UnsupportedEncodingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom("examportal947@gmail.com", "Exam Portal Support");
        helper.setTo(email);

        String subject = "Here's the link to reset your password";

        String content = "<p>Hello,</p>"
                + "<p>You have requested to reset your password.</p>"
                + "<p>Click the link below to change your password:</p>"
                + "<p><a href=\"" + resetPasswordLink + "\">Change my password</a></p>"
                + "<br>"
                + "<p>Ignore this email if you do remember your password, "
                + "or you have not made the request.</p>";

        helper.setSubject(subject);

        helper.setText(content, true);

        javaMailSender.send(message);
    }

    @GetMapping("/reset_password")
    public String showResetPasswordForm(@PathVariable("token") String token) {
        User user = userService.getResetPasswordToken(token);

        if (user == null) {
            return "Invalid Token";
        }
        return "Do this process again";
    }


    @PostMapping("/reset_password")
    public String processResetPassword(HttpServletRequest request) {
        String token = request.getParameter("token");
        String password = request.getParameter("password");

        User user = userService.getResetPasswordToken(token);


        if (user == null) {
            return "Invalid Token";
        } else {
            userService.updatePassword(user, password);

            return "You have successfully changed your password";
        }
    }
}
