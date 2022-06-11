package com.examportal;

import com.examportal.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExamPortalServerApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;

	Logger logger = LoggerFactory.getLogger(ExamPortalServerApplication.class);

	public static void main(String[] args) {

		SpringApplication.run(ExamPortalServerApplication.class, args);
		System.out.println("Project Is Running");
	}

	@Override
	public void run(String... args) throws Exception {
		logger.info("Project is running");

//		try{
//			User user = new User();
//
//		user.setFirstName("Nawaz");
//		user.setLastName("Habib");
//		user.setUsername("nawazHabib");
//		user.setPassword("zaq1xsw2");
//		user.setEmail("roaringhabib64@gmail.com");
//		user.setProfile("default.png");
//
//		Role role1 = new Role();
//		role1.setRoleID(13L);
//		role1.setRoleName("ADMIN");
//
//		Set<UserRole> userRoleSet = new HashSet<>();
//		UserRole userRole = new UserRole();
//		userRole.setRole(role1);
//		userRole.setUser(user);
//
//		userRoleSet.add(userRole);
//
//		User user1 = this.userService.createUser(user, userRoleSet);
//
//		logger.info(user1.getUsername());
//
//		} catch (Exception e){
//			e.printStackTrace();
//		}

	}
}
