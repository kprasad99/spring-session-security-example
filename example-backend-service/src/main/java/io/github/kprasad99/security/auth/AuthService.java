package io.github.kprasad99.security.auth;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthService {

	@GetMapping(path = "/login")
	public boolean login() {
		return true;
	}

	@GetMapping(path = "/logout")
	public boolean logout() {
		SecurityContextHolder.clearContext();
		return true;
	}
}
