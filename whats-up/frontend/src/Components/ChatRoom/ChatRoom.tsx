import React, {useEffect, useState} from "react";
import {useSocket} from "../../CustomHooks/useSocket";
import './ChatRoom.css';
import Contact from "../Contact/Contact";
import Message from "../Message/Message";

interface Props{
    username: string;
    room: string
}
interface userData {
        username: string,
        receiver: string,
        message: string,
        status:string

}

function ChatRoom({username, room}: Props){
    let  {isConnected, socketResponse, sendData } = useSocket(username, room);
    const [userData, setUserData] = useState({
        username: username,
        receiver: '',
        message: '',
        status:'MESSAGE'
    });
    let [message, setMessage] = useState<string>("");
    let [messageList, setMessageList] = useState<userData[]>([]);


    let handleInput = (e: React.FormEvent<HTMLInputElement>) =>{
        setMessage(e.currentTarget.value);
        setUserData({...userData, message: message});
    }

    let addMessageToList = (payload : any)  => {
        if(userData.message.trim() !=="") {
            messageList.push(payload);
            setMessageList(messageList)
            console.log(messageList)
        }
    }

    let sendMessage = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if (message.trim()!==""){
            console.log(userData)
            sendData({message: userData.message})
            addMessageToList(userData);
            setMessage("");
        }

    }

    useEffect(() => {
        console.log("Socket Response: ", socketResponse);
        addMessageToList(socketResponse);
    }, [socketResponse]);

    useEffect(() => {
        console.log("MessageList: ", messageList);

    }, [messageList]);



    return(
        <div className="main-container">
           <div className="contacts-holder">
                   <Contact username={username} key={1}/>
           </div>
            <div className="right-container">
                {messageList.map((item : userData) =>
                    <Message username={item.username} message={item.message}/>
                )}
                <div className="message-container">
                    <div className="input-holder">
                        <form onSubmit={(e)=>{sendMessage(e)}}>
                            <input type="text"
                                   placeholder="Type...."
                                   value={message}
                                   onChange={handleInput}
                            />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatRoom;