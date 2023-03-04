import React from 'react'
import { useState,useEffect } from 'react'
import { Grid } from "../assets/UiKit/grid/Gird";
import { Line,Rows } from "../assets/UiKit/Line/Line";
import { useNavigate } from "react-router-dom";
import '../assets/scss/Login.scss'
import UserAPI from '.././functions/UserApi'

export default function Login() {
    const navigate = useNavigate();
    const [registerEmail, setEmail] = useState("");
    const [registerPassWord, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    

    function handlesubmit(e) {
        e.preventDefault();
        const userApi = new UserAPI()
        userApi.login(registerEmail, registerPassWord)
    }
    
    return (
    <div>
      <h2>LogIn</h2>
      <Grid>
        <Rows>
            <form>
            <label>Email</label>
        <input
          type="email"
          value={registerEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={registerPassWord}
          onChange={(e) => setPassword(e.target.value)}
        />
                <button onClick={handlesubmit}>Submit</button>
                <h5
                
                >{errorMessage}</h5>
            </form>
                
            
        </Rows>
      </Grid>

    </div>
  )
}
