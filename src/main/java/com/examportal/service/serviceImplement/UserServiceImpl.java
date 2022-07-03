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
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

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
}
