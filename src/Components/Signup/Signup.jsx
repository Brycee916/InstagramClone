import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
    <div>
        <input className="loginpage_text" type="text" placeholder='Mobile Number or Email'/>
        <input className="loginpage_text" type="text" placeholder='Full Name'/>
        <input className="loginpage_text" type="text" placeholder='Username'/>
        <input className="loginpage_text" type="password" placeholder='Password'/>
        <button className="loginpage_button">Sign up</button>
    </div>
  )
}

export default Signup