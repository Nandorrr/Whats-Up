package com.codecool.whatsup.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Message {
    private String sender;
    private String room;
    private String message;
    private Status status;
    @Id
    private Long id;


}
