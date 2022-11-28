import React, {useState} from "react";
import {useSocket} from "../../CustomHooks/useSocket";
import './ChatRoom.css';

interface Props{
    username: string;
}

function ChatRoom({username}: Props){
    let  {isConnected, socketResponse, sendData } = useSocket(username);

    return(
        <div className="main-container">
           <div className="contacts-holder">
               <div className="contact">Dave</div>
               <div className="contact">Jon</div>
               <div className="contact">Alex</div>
               <div className="contact">Crissy</div>
           </div>
            <div className="right-container">
                <div className="message-container">
                    <div className="message">
                        <div  className="name">Dave</div>
                       <div className="content"> Hello</div>
                    </div>
                    <div className="message">
                        <div  className="name">Nick</div>
                        <div  className="content"> Hello</div>
                    </div>
                    <div className="message mine">
                        <div className="name">Missy</div>
                        <div className="content"> Hello</div>
                    </div>
                    <div className="message mine">
                            <div className="name">Missy</div>
                            <div className="content"> How you all doin?</div>
                    </div>
                    <div className="input-holder">
                        <input type="text" placeholder="Type...."/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatRoom;