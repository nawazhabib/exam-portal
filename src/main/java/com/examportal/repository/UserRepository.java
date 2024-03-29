package com.examportal.repository;

import com.examportal.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    public User findByUsername(String username);

    public User findByEmail(String email);

    public User findByVerificationCode(String code);

    public User findByResetPasswordToken(String resetToken);

}
