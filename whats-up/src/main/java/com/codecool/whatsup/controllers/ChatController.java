package com.codecool.whatsup.controllers;

import com.codecool.whatsup.model.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    private Message receiveMessage(@Payload Message message){
        return message;
    }
}
