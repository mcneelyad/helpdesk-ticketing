import axios from 'axios';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

import '../css/Register.css';

export default function Register(props) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(email);
        console.log(username);
        console.log(password);

        let user = {
            email: email,
            username: username,
            password: password
        }

        fetch("http://localhost:5000/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then(data => console.log(data));
    }

    return (
        <div>
            <form className="joinOuterContainer" onSubmit={handleSubmit}>
                <div className="joinInnerContainer">
                    <h1 className="heading">Register</h1>
                    <br /><br />
                    <div>
                        <input placeholder="Enter your email" value={email} className="register-input" type="text" onChange={(event) => setEmail(event.target.value)} />
                    </div><br />
                    <div>
                        <input placeholder="Enter your username" value={username} className="register-input" type="text" onChange={(event) => setUsername(event.target.value)} />
                    </div><br />
                    <div>
                        <input placeholder="Enter your password" value={password} className="register-input mt-20" type="password" onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <br />
                    <button type="submit" className="register-btn">Register</button>
                </div>
            </form>
        </div>
    );
}