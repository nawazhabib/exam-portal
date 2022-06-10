package com.examportal.service;

import com.examportal.model.User;
import com.examportal.model.UserRole;

import java.util.Set;

public interface UserService {
    // create user
    public User createUser(User user, Set<UserRole> userRoles) throws Exception;
}
