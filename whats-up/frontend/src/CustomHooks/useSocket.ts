import io, {Socket} from 'socket.io-client';
import {SERVER_IP} from "../Constants/ConstantVariables";
import React, {useCallback, useEffect, useState} from "react";



export const useSocket = (username: string, room: string) => {
    const [socket, setSocket] = useState<Socket>();
    const [socketResponse, setSocketResponse] = useState({
        room: "",
        message: "",
        sender: "",
        status: "",
    });
    const [isConnected, setConnected] = useState(false);

    const sendData = useCallback(
        (payload : any) => {
            socket?.emit("send_message", {
                room: room,
                message: payload.content,
                sender: username,
                status:'MESSAGE'
            });
        },
        [socket, room]
    );
    useEffect(() => {
        const socket = io(SERVER_IP, {
            reconnection: false,
            query: ["/chatroom/public"]
        })
        setSocket(socket);
        socket.on("connect", () => setConnected(true));
        socket.on("read_message", (res) => {
            console.log(res);
            setSocketResponse({
                room: res.room,
                message: res.content,
                sender: res.username,
                status: res.status,
            });
        });
        return () => {
            socket.close();
        };
    }, [room]);

    return { socketResponse, isConnected, sendData };
};


