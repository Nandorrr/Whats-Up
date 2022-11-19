import React, {useState} from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import ChatRoom from "./Components/ChatRoom/ChatRoom";

function App() {
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");

  return (
      <div>
        {userName ==="" ? (
            <Login setUserName={setUserName} />
        ) :
        <ChatRoom/>
        }
      </div>
  );
}

export default App;
