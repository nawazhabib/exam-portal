package com.examportal.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Table(name = "user_role")
public class UserRole {

    @Id
    private Long roleID;
    private String roleName;

    public UserRole() {
    }
}
