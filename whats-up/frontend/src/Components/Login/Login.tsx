import React, {useState} from 'react';

type Props ={
    setUserName: React.Dispatch<React.SetStateAction<string>>
}

function Login({setUserName}:Props) {
    let [userInput, setUserInput] = useState("");

    let checkForLogin = (event: React.FormEvent) => {
        event.preventDefault();
        if(userInput.trim() ===''){
            alert("Please type in the Username")
        }
        setUserName(userInput)
    }

return(
    <div>
        <form onSubmit={checkForLogin}>
            <input type="text"
                   name="userName"
                   placeholder="Username"
                   onChange={event => setUserInput(event.target.value)}/>
            <button type="submit">Go!</button>
        </form>
    </div>
)
}

export default Login;