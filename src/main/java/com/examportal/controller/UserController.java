package com.examportal.controller;

import com.examportal.exception.UserFoundException;
import com.examportal.model.Role;
import com.examportal.model.User;
import com.examportal.model.UserRole;
import com.examportal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

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

//    creating user with normal role
    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {

        user.setProfile("default.png");

//        encoding password with bCyptPasswordEncoder
        user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));

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
    public User getUser(@PathVariable ("username") String username){
        return this.userService.getUser(username);
    }

//    deleter user by user ID
    public void deleteUser(@PathVariable("userID") Long userID){
        this.userService.deleteUser(userID);
    }

//    update user by user name


    @ExceptionHandler(UserFoundException.class)
    public ResponseEntity<Object> exceptionHandler(UserFoundException e) {
        return new ResponseEntity<>("User is found", HttpStatus.FOUND);
    }
}
