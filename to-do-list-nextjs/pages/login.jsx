import {useState} from "react"
import axios from "axios"
import Link from "next/link"

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

	const signup = () => {
                window.location.href = "/signup"
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
			<div className="login-div">
				<h1>Log-in</h1>

				<div>
					Username:
					<input placeholder="username" type="text" onChange={handleUsernameInputChange} value={usernameInput}/></div>
                                <div>
					Password:
					<input placeholder="********" type="password" onChange={handlePasswordInputChange} value={passwordInput}/></div>
				<div className="button-group-login">
					<button onClick={login}>Recover Password</button>
                                        <button onClick={login}>login</button>
                                        <button onClick={signup}>Create an account</button>
				</div>
			</div>
		</>
	)
}

