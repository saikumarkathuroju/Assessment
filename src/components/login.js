import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import '../App.css'
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword,setShowPassword]=useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulated token management
    if (username === 'corporateUser' && password === 'securePassword') {
      const token = 'abcdef1234567890'; // This should be generated by a backend service

      // Store the token in local storage
      localStorage.setItem('token', token);

      // Display success message
      setMessage('Login successful!');
    } else {
      // Display error message
      setMessage('Invalid username or password');
    }
  }

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Corporate Login</h1>
      </div>
      <form id="login-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          id="username" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", border:"1px solid gray", height:"40px", borderRadius:"5px", margin:"5px"}}>
        <input 
          type={showPassword?"text":"password"} 
          id="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{border:"none", width:"90%"}}
          className='input-field'
        />
        <button onClick={()=>setShowPassword(prev=>(!prev))} style={{border:"none", width:"10%", outline:"none",type:"button", backgroundColor:"white"}}>{showPassword?<FaEye style={{color:"black"}}/>:<FaEyeSlash style={{color:"black"}}/>}</button>
        </div>
        <button type="submit">Login</button>
      </form>
      <p id="message" style={{ color: message === 'Login successful!' ? 'green' : 'red' }}>{message}</p>
    </div>
  );
}

export default Login;
