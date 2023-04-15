import React, { useState} from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { useNavigate } from "react-router-dom"


const Register = () => {
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const navigate = useNavigate();

	const onSubmit = async (event) => {
		event.preventDefault();
		try{
			await axios.post("http://localhost:3001/newuser/register", {
			username,
			password
		});
		alert("Registration Successfull! Now Login!")
		navigate("/login");

		} catch(error) {
			console.log(error);
		}
		
	}

	return( 
		<Form username={username} 
		setUsername={setUsername} 
		password={password} 
		setPassword = {setPassword} 
		label = "Register" 
		onSubmit={onSubmit}
		 />
	)
}



export default Register;
