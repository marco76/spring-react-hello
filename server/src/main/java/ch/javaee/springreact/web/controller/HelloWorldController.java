package ch.javaee.springreact.web.controller;

import ch.javaee.springreact.web.bean.Greetings;
import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.*;

/**
 * Created by marcomolteni on 11.07.17.
 */

@RestController
public class HelloWorldController {

    private Logger LOGGER = Logger.getLogger(HelloWorldController.class.getName());

    @GetMapping(path = "hello-world")
    @ResponseBody
    public Greetings sayHello() {
        LOGGER.debug("sayHello");

        return new Greetings("Hello World from Spring!");
    }

}
