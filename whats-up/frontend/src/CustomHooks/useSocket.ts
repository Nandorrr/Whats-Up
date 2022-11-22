import {Client, over} from 'stompjs';
import SockJS from 'sockjs-client';
import {SERVER_IP} from "../Constants/ConstantVariables";
import  {useCallback, useEffect, useState} from "react";


let STOMPCLIENT : Client;
let SOCK = new SockJS(SERVER_IP);

export const useSocket = (username: string) => {
    let [socket, setSocket] = useState();
    let [socketResponse, setSocketResponse] = useState({
        content: "",
        username: "",
        messageType: "",
        createdDateTime: "",
    });

    const [isConnected, setConnected] = useState(false);

    const sendData = useCallback(
        (payload : any) => {
            // @ts-ignore
            socket.emit("send_message", {
                content: payload.content,
                username: username,
                messageType: "CLIENT",
            });
        },
        [socket]
    );
    useEffect(() =>{
        STOMPCLIENT = over(SOCK);
        STOMPCLIENT.connect({}, onConnect, onError);
        setConnected(true);
        setSocket(socket)
    })

    const onConnect = (username: any) =>{
        STOMPCLIENT.subscribe('/chatroom/public');
        STOMPCLIENT.subscribe(`private/${username}/message`);
        console.log("Joined");
        userJoin(username);
    }

    const onError = (error: any) => {
        console.log(error);
    }

    const userJoin = (username: string) =>{
        let joinMessage : Object = {
            sender : username,
            status: 'JOIN'
        };
        STOMPCLIENT.send('/chat/message', {}, JSON.stringify(joinMessage));
    }
    return {socketResponse, isConnected, sendData};
}

