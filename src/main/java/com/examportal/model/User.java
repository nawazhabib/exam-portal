package com.examportal.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Table(name = "users")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotEmpty
    @Size(min = 4, max = 16, message = "User name must be 4-16 charachtes")
    private String username;

//    @Size(min = 6, max = 12, message = "Password must be 6-24 charachtes")
//    @NotNull

    @NotBlank(message = "Password is required")
    @Size(min = 6, max = 65, message = "Password should have min 6 characters")
    private String password;

    @NotEmpty
    @Size(min = 4, max = 10, message = "First name must be 4-8 charachtes")
    private String firstName;

    @NotEmpty
    @Size(min = 4, max = 10, message = "Last name must be 4-8 charachtes")
    private String lastName;


    @Email
    private String email;


    @NotEmpty
    @Pattern(regexp = "(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\\d{8})$")
    @Size(min = 11, max = 11, message = "Phone number must be 11 number")
    private String phone;

    private String profile;
    private boolean enabled = true;

    //   generate one user have many roles
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "user")
    @JsonIgnore
    private Set<UserRole> userRoleSet = new HashSet<>();

    public User() {
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        Set<Authority> authoritySet = new HashSet<>();

        this.userRoleSet.forEach(userRole -> {
            authoritySet.add(new Authority(userRole.getRole().getRoleName()));
        });

        return authoritySet;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
}
