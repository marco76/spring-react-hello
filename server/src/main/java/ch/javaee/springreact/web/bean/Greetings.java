package ch.javaee.springreact.web.bean;

/**
 * Created by marcomolteni on 11.07.17.
 */
public class Greetings {

    public Greetings(String message) {
        this.message = message;
    }

    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
