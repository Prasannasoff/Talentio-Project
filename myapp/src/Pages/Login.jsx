import React from 'react'
import "./Login.css"
import { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../Context/AuthContext';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    return (
        <div className='main'>
            {/* <Sidebar /> */}
            <div className="container">

                <div className="Innercontainer">

                    <div className="imageCont"><img
                        src="https://th.bing.com/th?id=OIP.S_BEyoTYNIwRpRXmQWtKJAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                        rounded className='image' />

                    </div>
                    <div style={{ fontSize: '25px', color: 'black', fontWeight: 'bold' }}>LOGIN</div>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '20px ' }}>

                        <input type="text" name="email" placeholder="Enter Your Name" value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <input type="password" name="password" placeholder="Enter Your Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <div style={{ color: 'black', fontSize: '14px', alignSelf: 'self-start', cursor: 'pointer' }} onClick={() => navigate('/register')}>Don't have an account? Register</div>
                        <div type="submit" id="buttonId" className='button' onClick={() => login(email, password)}>
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;