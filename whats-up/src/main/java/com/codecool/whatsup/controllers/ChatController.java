package com.codecool.whatsup.controllers;

import com.codecool.whatsup.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    private SimpMessagingTemplate messagingTemplate;

    @Autowired
    public ChatController(SimpMessagingTemplate messagingTemplate){
        this.messagingTemplate = messagingTemplate;
    }

    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    private Message receiveMessage(@Payload Message message){
        return message;
    }

    @MessageMapping("/private-message")
    private Message receivePrivateMessage(@Payload Message message){
        messagingTemplate.convertAndSendToUser(message.getReceiver(), "/private", message);
        return message;
    }
}
