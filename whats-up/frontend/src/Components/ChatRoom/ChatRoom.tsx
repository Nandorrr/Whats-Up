import React, {useState} from "react";
import {useSocket} from "../../CustomHooks/useSocket";

interface Props{
    username: string;
}

function ChatRoom({username}: Props){
    let  {isConnected, socketResponse, sendData } = useSocket(username);

    return(
        <div>
            {username}
        </div>
    )
}

export default ChatRoom;