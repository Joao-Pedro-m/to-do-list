import {useState} from "react"
import axios from "axios"

export default function Home() {
	
	const [usernameInput, setUsernameInput] = useState("")
	const [passwordInput, setPasswordInput] = useState("")
	const [loginStatus, setLoginStatus] = useState(0)

	const handleUsernameInputChange = (e) => {
		setUsernameInput(e.target.value)
	}

        const handlePasswordInputChange = (e) => {
                setPasswordInput(e.target.value)
        }
	async function login(){  
		const response = await axios(
			{
  				method: "post",
				url: "/api/validadeLogin",
				data: {
					username: usernameInput,
					password: passwordInput,
  				}
			}
		)
		console.log(response)
		if (response.data)
		{
			console.log(1)
			setLoginStatus(1)
		}else
		{
			console.log(0)
			setLoginStatus(0)
		}
	}

	return (
		<>
			<div>
				<h1>To-Do App</h1>
				<div>
					Username:
					<input placeholder="Joao_Pedro" type="text" onChange={handleUsernameInputChange} value={usernameInput}/></div>
                                <div>
					Password:
					<input placeholder="********" type="secret" onChange={handlePasswordInputChange} value={passwordInput}/></div>
		<button onClick={login}>login</button>
				<div>username:{usernameInput}</div>
				<div>password:{passwordInput}</div>
				<div>LoginStatus:{loginStatus}</div>
			</div>
		</>
	)
}

