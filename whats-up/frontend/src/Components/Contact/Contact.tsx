import React from "react";
import '../ChatRoom/ChatRoom.css'
interface Props{
    username : string
    key: number
}
function Contact({username, key}:Props){
    return(
        <div className="contact" key={key}>
            {username}
        </div>
    )
}

export default Contact;