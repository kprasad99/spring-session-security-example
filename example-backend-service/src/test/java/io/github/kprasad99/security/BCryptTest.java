package io.github.kprasad99.security;

import org.junit.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BCryptTest {

	@Test
	public  void testBCrpt() {
		BCryptPasswordEncoder pEncoder = new BCryptPasswordEncoder(4);
		System.out.println(pEncoder.encode("password"));
	}
}
