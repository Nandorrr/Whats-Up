import React from "react";

interface Props{
    username : string,
    message: string
}
function Message({username, message}: Props){
    return(
        <div className="message">
            <div  className="name">{username}</div>
            <div className="content"> {message}</div>
        </div>
    )
}

export default Message;