import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/Login.css'

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        axios.post("http://localhost:5000/login", { username, password })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }

    return (
        <form className="joinOuterContainer" onSubmit={handleSubmit}>
            <div className="joinInnerContainer">
                <h1 className="heading">Login</h1>
                <div>
                    <input placeholder="Enter your username" value={username} className="login-input" type="text" onChange={(event) => setUsername(event.target.value)} />
                </div><br />
                <div>
                    <input placeholder="Enter your password" value={password} className="login-input mt-20" type="password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <br />
                <button type="submit" className="login-btn">Login</button>
            </div>
        </form>
    );
}