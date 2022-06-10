package com.examportal.service.serviceImplement;

import com.examportal.model.User;
import com.examportal.model.UserRole;
import com.examportal.repository.RoleRepository;
import com.examportal.repository.UserRepository;
import com.examportal.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    Logger logger =  LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

//    creating user
    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception {
        User user1 = this.userRepository.findByUsername(user.getUsername());
        if(user1 != null){
            logger.info("user is already in db");
            throw new Exception("username already use");
        }else {
            for(UserRole ur : userRoles){
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
}
