import React from 'react'
import "./Login.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
    const handleLogin = async () => {
        try {
            console.log("HELLO");
       
            const response = await axios.post(
                "http://localhost:5000/api/user/register",
                {
                    name:name,
                    email: email,
                    password: password,
                }
            );
            if(response){
                navigate("/login");
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (

        <div className="container">

            <div className="Innercontainer">

                <div className="imageCont"><img
                    src="https://th.bing.com/th?id=OIP.S_BEyoTYNIwRpRXmQWtKJAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                    rounded className='image' />

                </div>
                <div style={{ fontSize: '25px', color: 'black', fontWeight: 'bold' }}>Register</div>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '20px ' }}>
                    <input type="text" name="email" placeholder="Enter your name" value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <input type="text" name="email" placeholder="Enter Email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <input type="password" name="password" placeholder="Enter Your Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <div style={{ color: 'black', fontSize: '14px', alignSelf: 'self-start',cursor:'pointer' }} onClick={()=>navigate("/")}>Already Have an account? <a>Login</a></div>
                    <div type="submit" id="buttonId" className='button' onClick={() => handleLogin()}>
                       Register
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Register;