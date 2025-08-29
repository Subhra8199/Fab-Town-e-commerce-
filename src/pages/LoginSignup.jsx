import React from 'react'
import './CSS/Loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-cointainer">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='your name' />
          <input type="email" placeholder='Email address' />
          <input type="passward" placeholder='passward' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Aleady have an account <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name=' ' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
