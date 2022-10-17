
package com.usa.reto.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecurityAdapter extends WebSecurityConfigurerAdapter {

        @Override
        protected void configure(HttpSecurity http) throws Exception {
                /*
                 * DESACTIVADO PARA PRUEBA PLATAFORMA // use /home.html para revisar frond-end
                 * http
                 * .authorizeRequests(a -> a
                 * .antMatchers("/", "/error", "/webjars/**",
                 * "/Car/**", "/Gama/**", "/Client/**", "/Admin/**",
                 * "/Message/**", "/Reservation/**", "/Score/**")
                 * .permitAll()
                 * .anyRequest().authenticated())
                 * .exceptionHandling(e -> e
                 * .authenticationEntryPoint(
                 * new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED)))
                 * .oauth2Login().defaultSuccessUrl("/home.html", true);
                 */
                http.authorizeRequests().antMatchers("/**").permitAll().anyRequest().anonymous();
                http.logout(l -> l
                                .logoutSuccessUrl("/").permitAll());

                http.cors().and().csrf().disable();

        }

}
