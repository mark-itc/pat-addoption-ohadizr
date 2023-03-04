import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import localForage from "localforage";
import UserApi from "./functions/UserApi";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [token, setToken] = useState('');
  const [_id, setAuthId] = useState('');
  // const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [userData, setUserData] = useState(null);
  
async function getUserDataById(_id) {
    try {
    const userApi = new UserApi();   
    const userData = await userApi.getUserById(_id);   
    setUserData(userData) 
    } catch (error) {
        console.log(error);
    }
}

async function getFromLocalForge() {
    try {
      const petApp = await localForage.getItem('petApp');
      setToken(petApp.token);
      setAuthId(petApp._id);

        return 
    } catch (error) {
      console.log(error);
    }
  }



useEffect(() => {
    getFromLocalForge()
    console.log("checked for Forge");
}, [])
useEffect(() => {
    getUserDataById(_id)
    console.log("id changed ");
}, [_id])





  return (
    <AuthContext.Provider value={{userData  }}>
    {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
