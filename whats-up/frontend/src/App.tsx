import React, {useState} from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import ChatRoom from "./Components/ChatRoom/ChatRoom";

function App() {
  const [userName, setUserName] = useState<string>("");
  const room: string = "default";

  return (
      <div>
        {userName ==="" ? (
            <Login setUserName={setUserName} />
        ) : (
             <ChatRoom username={userName} room={room}/>
        )
        }
      </div>
  );
}

export default App;
