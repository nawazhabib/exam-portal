package com.examportal.controller;

import com.examportal.exception.EmailFoundException;
import com.examportal.exception.UserFoundException;
import com.examportal.model.Role;
import com.examportal.model.User;
import com.examportal.model.UserRole;
import com.examportal.service.UserService;

import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @GetMapping("/test")
    public String test() {
        return "Examportal serving is running";
    }

    //    creating user with normal role
    @PostMapping("/")
    public User createUser(@Valid @RequestBody User user) throws Exception {

        user.setProfile("default.png");

//        encoding password with bCyptPasswordEncoder
        user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));

        String verificationCode = RandomString.make(64);
        user.setVerification_code(verificationCode);

        Set<UserRole> roleSet = new HashSet<>();

        Role role = new Role();
        role.setRoleID(20L);
        role.setRoleName("NORMAL");

        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);

        roleSet.add(userRole);

        return this.userService.createUser(user, roleSet);
    }

    //    get single user by user name
    @GetMapping("/{username}")
    public User getUser(@PathVariable("username") String username) {
        return this.userService.getUser(username);
    }

    //    deleter user by user ID
    @DeleteMapping("/{userID}")
    public void deleteUser(@PathVariable("userID") Long userID) {
        this.userService.deleteUser(userID);
    }

    //    update user by userID
    @PutMapping("/{userID}")
    public User updateUser(@Valid @RequestBody User user, @PathVariable("userID") long userID) {
        return this.userService.updateUser(user, userID);
    }


    @ExceptionHandler(UserFoundException.class)
    public ResponseEntity<Object> exceptionHandler(UserFoundException e) {
        return new ResponseEntity<>("User is found in DB", HttpStatus.FOUND);
    }

    @ExceptionHandler(EmailFoundException.class)
    public ResponseEntity<Object> exceptionHandler(EmailFoundException e) {
        return new ResponseEntity<>("Email is found in DB", HttpStatus.FOUND);
    }
}
