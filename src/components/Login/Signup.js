import React, { useState } from "react";
import axios from "axios";

const SignUp = (props) =>{
    const [credentials, setCredentials] = useState ({ username: "", password: "", phoneNumber: ""});

    const signUp = (e) => {
        axios
        .post(
            `https://watermyplant-tt7.herokuapp.com/createnewuser`,
            `grant_type=password&username=${credentials.username}
            &password=${credentials.password}
            &phoneNumber=${credentials.phoneNumber}`,
            {
                headers: {
                    Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
					"Content-Type": "application/x-www-form-urlencoded",
                }
            }
        )
        .then((res) => {
			console.log(res.data);
			localStorage.setItem("token", res.data.access_token);
			props.history.push("/userinfo");
		});
	};

    const handleChange = (e) =>
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    
    return (
        <div className="Sign-Up">
            <h3>Sign-up Today!</h3>
            <form onSubmit={signUp}>
            <label>
                Username:
                <input type="text" name="username" value={credentials.username} onChange={handleChange}/>
            </label>
            <label>
                Password:
                <input type="password" name="password" value={credentials.password} onChange={handleChange}/> 
            </label>
            <label>
                Mobile Phone Number:
                <input type="phoneNumber" name="phoneNumber" value={credentials.phoneNumber} onChange={handleChange}/> 
            </label>
            <button onClick={() => SignUp()}>Sign-Up</button>
            </form>
        </div>
    )
};
;
export default SignUp;
