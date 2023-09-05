import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
import '../App.css';

function Login() {

    const navigate = useNavigate();

    // User Login info
    const database = [
        {
            username: "cont1",
            password: "pass1"
        },
        {
            username: "headcoach1",
            password: "pass2"
        },
        {
            username: "coach1",
            password: "pass3"
        }
    ];

    const errors = {
        username: "Invalid Username",
        password: "Invalid Password"
    };

    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Generate JSX code for error message
    const renderErrorMessage = (name) => {
        return name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setUser(prevValue => {
            if (name === "username") {
                return {
                    username: value,
                    password: prevValue.password
                };
            } else if (name === "password") {
                return {
                    username: prevValue.username,
                    password: value
                }
            }
        });
    }

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
        const {username, password} = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === username.value);

        // Compare user info
        if (userData) {
            if (userData.password !== password.value) {
                // Invalid password
                setErrorMessages({name: "password", message: errors.password});
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({name: "username", message: errors.username});
        }
    };
    isSubmitted && navigate("/homepage");

    return (
        <div>
            <div className="pagecenter loginForm">
                <form>
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <label htmlFor="username" className="col-sm-2 col-form-label">User Name:</label>
                        <div className="col-sm-3 mb-2">
                            <input type="text" name="username" value={user.username}
                                   onChange={handleChange} className="form-control" id="username"
                                   placeholder="User Name"/>
                            {renderErrorMessage("username")}
                        </div>
                        <div className="col-sm-4">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
                        <div className="col-sm-3 mb-2">
                            <input type="password" autoComplete="on" value={user.password} name="password"
                                   onChange={handleChange} className="form-control" id="password"
                                   placeholder="Password"/>
                            {renderErrorMessage("password")}
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 center mt-2">
                            <button type="submit" className="button" onClick={handleSubmit}>Login</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 mt-2"></div>
                        <div className="col-sm-4 right">
                            <a href="/register">Forget Password</a>
                        </div>
                        <div className="col-sm-4 mt-2"></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
