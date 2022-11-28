package com.codecool.whatsup.controllers;

import com.codecool.whatsup.model.Message;
import com.codecool.whatsup.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/message")
public class ChatController {


    private final MessageService messageService;

    @Autowired
    public ChatController(MessageService messageService) {
        this.messageService = messageService;
    }

    @CrossOrigin
    @GetMapping("/{room}")
    public ResponseEntity<List<Message>> getMessages(@PathVariable String room){
        return ResponseEntity.ok(messageService.getMessages(room));
    }


}
