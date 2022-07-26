package com.examportal.service.serviceImplement;

import com.examportal.exception.EmailFoundException;
import com.examportal.exception.UserFoundException;

import com.examportal.model.User;
import com.examportal.model.UserRole;

import com.examportal.repository.RoleRepository;
import com.examportal.repository.UserRepository;
import com.examportal.service.UserService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private JavaMailSender mailSender;


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    //    creating user
    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception {
        User user1 = this.userRepository.findByUsername(user.getUsername());
        User user2 = this.userRepository.findByEmail(user.getEmail());
        if (user1 != null || user2 != null) {
            if (user2 != null) {
                throw new EmailFoundException();
            }
            throw new UserFoundException();
        } else {
            for (UserRole ur : userRoles) {
                roleRepository.save(ur.getRole());

//                add roles in user
                user.getUserRoleSet().addAll(userRoles);
                user1 = this.userRepository.save(user);
            }
        }
        return user1;
    }

    //    get user by user name
    @Override
    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }

    //    delete user by user ID
    @Override
    public void deleteUser(Long userID) {
        this.userRepository.deleteById(userID);
    }

    //update user
    @Override
    public User updateUser(User user, long userId) {
        User userUpdate = this.userRepository.findById(userId).get();

        userUpdate.setUsername(user.getUsername());
        userUpdate.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
        userUpdate.setFirstName(user.getFirstName());
        userUpdate.setLastName(user.getLastName());
        userUpdate.setEmail(user.getEmail());
        userUpdate.setPhone(user.getPhone());
        userUpdate.setProfile(user.getProfile());

        return this.userRepository.save(userUpdate);
    }

    //    send verification code
    @Override
    public void sendVerificationEmail(User user, String siteURL) throws MessagingException, UnsupportedEncodingException {
        String subject = "Please verify your registration";
        String senderName = "Examp portal";
        String mailContent = "<p>Hello " + user.getFirstName() + ",</p>";
        mailContent += "<p>Please click the link below to verify to your registration:</P>";

        String verifyURL = siteURL + "verify?code=" + user.getVerification_code();
        mailContent += "<h3><a =\"herf=" + siteURL + "\">VERIFY</a><h3>";

        mailContent += "<p>Thank you<br> Exam Portal";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom("examportal947@gmail.com", senderName);
        helper.setTo(user.getEmail());
        helper.setSubject(subject);
        helper.setText(mailContent, true);

        mailSender.send(message);
    }


}
