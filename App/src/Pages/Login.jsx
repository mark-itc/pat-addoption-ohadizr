import React from "react";
import { useState, useEffect } from "react";
import { Grid } from "../assets/UiKit/grid/Gird";
import { Line, Rows } from "../assets/UiKit/Line/Line";
import { useNavigate } from "react-router-dom";
import "../assets/scss/Login.scss";
import UserAPI from ".././Data/UserApi";
import { AuthContext } from ".././AuthContextProvider";
import { useContext } from "react";
import localforage from "localforage";

export default function Login() {
  const navigate = useNavigate();
  const [registerEmail, setEmail] = useState("");
  const [registerPassWord, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { userData, setUserData } = useContext(AuthContext);
  const userApi = new UserAPI();

  const [userId , setUserId] = useState("")
  const [userToken , setUserToken] = useState("")
  const [isLogged, setIsLogged] = useState(false)


//login get confirmation 
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userLogIn = await userApi.login(registerEmail, registerPassWord);
      console.log(userLogIn);
      if (userLogIn.status === 200) {
        console.log();
        setUserId(userLogIn.user._id);
        setUserToken(userLogIn.token);
        setIsLogged(true)
      }
    } catch (error) {
      console.log(error);
    }
  }


isLogged? userApi.setToken(userToken,userId) : console.log("not logged");

if (isLogged===true) {
  const userDataFromApi= async ()=>await userApi.getUserData(userId)
  setUserData (userDataFromApi)
  navigate("/home");

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
            <button onClick={handleSubmit}>Submit</button>
            <h5>{errorMessage}</h5>
          </form>
        </Rows>
      </Grid>
    </div>
  );
}
