import React, { useState } from 'react';
import Banner from '../Components/Banner/Banner';
import Hero from '../Components/Hero/Hero';
import './login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
   
    console.log('Email:', email);
    console.log('Password:', password);
   
  };

  return (
    <>
      <Hero>
        <Banner
          title="Login"
          subtitle="Please enter your credentials to login."
        />
        <div className="mainContainer"> 
          <form onSubmit={handleLogin}>
            <div className="titleContainer"> 
              
            </div>
            <div className="inputContainer"> 
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  label='Email address'
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="inputBox" 
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="inputBox" 
                  required
                />
              </div>
              
            </div>
            <div className="buttonContainer"> 
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </Hero>
    </>
  );
};

export default Login;