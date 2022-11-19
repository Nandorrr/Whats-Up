import React, {useState} from 'react';

type Props ={
    setUserName: React.Dispatch<React.SetStateAction<string>>
}

function Login({setUserName}:Props) {
    let [setUserInput, setSetUserInput] = useState("");

    let checkForLogin = (event: React.FormEvent) => {
        event.preventDefault();
        if(setUserInput.trim() ===''){
            alert("Please type in the Username")
        }
        setUserName(setUserInput)
    }

return(
    <div>
        <form onSubmit={checkForLogin}>
            <input type="text"
                   name="userName"
                   placeholder="Username"
                   onChange={event => setSetUserInput(event.target.value)}/>
            <button type="submit">Go!</button>
        </form>
    </div>
)
}

export default Login;