import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';

import '../css/Login.css';

async function loginUser(credentials) {
    return fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({setToken}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const token = await loginUser({ username, password });
    //     setToken(token);
    //   }

    return (
        <div>
            <form className="joinOuterContainer">
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
            <p className="signup-link">Dont have an account? <a href="/register">Sign up today!</a></p>
        </div>
    );
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   }