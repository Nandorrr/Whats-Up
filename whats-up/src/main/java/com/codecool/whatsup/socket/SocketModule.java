package com.codecool.whatsup.socket;

import com.codecool.whatsup.model.Message;
import com.codecool.whatsup.service.SocketService;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DataListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class SocketModule {

    private final SocketService socketService;
    private final SocketIOServer server;

    public SocketModule(SocketIOServer server,SocketService socketService ){
        this.server = server;
        this.socketService = socketService;
        server.addConnectListener(onConnected());
        server.addDisconnectListener(onDisconnected());
        server.addEventListener("send_message", Message.class, onChatReceived());
    }

    private DataListener<Message> onChatReceived(){
        return (senderClient, data, ackSender) -> {
            log.info(data.toString());
            socketService.sendMessage(data.getRoom(), "get_message", senderClient, data.getMessage());
        };
    }
    private ConnectListener onConnected(){
        return (client) -> {
            String room = client.getHandshakeData().getSingleUrlParam("room");
            client.joinRoom(room);
            log.info("Socket ID [{}] connected to socket!", client.getSessionId().toString());
        };
    }

    private DisconnectListener onDisconnected(){
        return client -> log.info("Client [{}] disconnected from socket", client.getSessionId().toString());
    }
}
