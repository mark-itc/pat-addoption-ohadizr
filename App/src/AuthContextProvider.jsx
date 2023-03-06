import { useState } from "react";
import { createContext ,useEffect } from "react";
import localForage from "localforage";
import UserApi from "./Data/UserApi";

const AuthContext = createContext();
const userApi = new UserApi();
function AuthContextProvider({ children }) {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState();
  const [isLogged, setIsLogged] = useState(false);
  const [userDataStored, setUserDataStored] = useState(false);

  async function getUserData() {
    const petApp = await localForage.getItem("petApp");
    console.log("petApp", petApp._id);
    // const userData = await userApi.getUserById(petApp._id, petApp.token);
    if (userData.status === 200) {
      console.log("200");
    setUserData(userData);
    setUserDataStored(true);
    console.log("userDataStored", userDataStored);
    }
  }

  async function validatePorcces(){
    try {
      const petApp = await localForage.getItem("petApp");
      console.log("petApp", petApp._id);
      const userData = await userApi.getUserById(petApp._id, petApp.token);
      if (userData.status === 200) {
        console.log("200");
      setUserData(userData);
      setIsLogged(true);
      setUserDataStored(true);
      console.log("userDataStored", userDataStored);
      };
    } catch (error) {
      console.log(error);
    }
  }
  if (!isLogged && userDataStored) {
    console.log("!isLogged && userDataStored");
    validatePorcces()
}
  if (isLogged && !userDataStored) {
    console.log("isLogged && !userDataStored");
    getUserData();
  }

    if (!isLogged && !userDataStored) {
      console.log("!isLogged && !userDataStored");
      validatePorcces()
    }  

  return (
    <AuthContext.Provider
      value={{ userDataStored, userData, setUserData, isLogged, setIsLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
