package ua.com.nc.nctrainingproject.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ua.com.nc.nctrainingproject.models.Author;
import ua.com.nc.nctrainingproject.models.Book;
import ua.com.nc.nctrainingproject.models.User;
import ua.com.nc.nctrainingproject.persistance.dao.postgre.AuthorPostgreDAO;
import ua.com.nc.nctrainingproject.persistance.dao.postgre.BookPostgreDAO;
import ua.com.nc.nctrainingproject.persistance.dao.postgre.GenrePostgreDAO;
import ua.com.nc.nctrainingproject.persistance.dao.postgre.UserBooksPostgreDAO;
import ua.com.nc.nctrainingproject.services.AuthorizationService;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class AuthorizationController {
  private final AuthorizationService authorizationService;

  @Autowired
  public AuthorizationController(AuthorizationService authorizationService) {
    this.authorizationService = authorizationService;
  }

  @RequestMapping(value = "/login", method = RequestMethod.POST)
  public User login(@RequestParam(name = "login") String login,
                    @RequestParam(name = "password") String password) {

    return authorizationService.auth(login, password);
  }

  @RequestMapping(value = "/registration", method = RequestMethod.POST)
  public User registration(@RequestParam(name = "login") String login,
                           @RequestParam(name = "password") String password,
                           @RequestParam(name = "email") String email) {

    return authorizationService.register(login, password, email);
  }

  @RequestMapping(value = "/testFeature", method = RequestMethod.POST)
  public void loginUser(@RequestParam(name = "login") String login,
                        @RequestParam(name = "password") String password) {
    authorizationService.auth(login, password);
  }

  @Autowired
  UserBooksPostgreDAO userBooksPostgreDAO;

  @RequestMapping(value = "/test", method = RequestMethod.GET)
  public void test() {
    //   userBooksPostgreDAO.markBookAsFavourite(2, 2);
    userBooksPostgreDAO.removeFromFavourite(2, 2);
    userBooksPostgreDAO.removeFromRead(2, 2);
  }
}






