import { useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import Form from "../components/Form";


const Login = () =>{
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [cookie, setCookies] = useCookies(["access_token"]);
	const navigate = useNavigate();

	const onSubmit = async (event) => {
		event.preventDefault();
		try{
			const response = await axios.post("http://localhost:3001/log/login", {
			username,
			password
		});
		console.log(response);
		setCookies("access_token", response.data.token);
		window.localStorage.setItem("userID",response.data.userID);
		
		navigate("/");
		} catch(error) {
			console.log(error);
		}
		
	}
  return(
	<Form username={username} 
	setUsername={setUsername} 
	password={password} 
	setPassword = {setPassword} 
	label = "Login" 
	onSubmit={onSubmit}/>
  )
}

export default Login;