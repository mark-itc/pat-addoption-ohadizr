import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import localForage from "localforage";
import UserApi from "./Data/UserApi";

const AuthContext = createContext();
const userApi = new UserApi();
function AuthContextProvider({ children }) {
  const [token, setToken] = useState("");
  const [_id, setAuthId] = useState("");
  const [userData, setUserData] = useState();

  // async function getUserDataById(_id) {
  //   try {
  //     const userData = await userApi.getUserById(_id);
  //     setTimeout(() => {
  //       setUserData(userData)  
  //     }, 20000);
  //     ;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function getFromLocalForge(token) {
  //   try {
  //     const petApp = await localForage.getItem("petApp");

  //     if (petApp === null) {
  //       return;
  //     }

      // setToken(petApp.token);
      // setAuthId(petApp._id);
//       if (petApp._id == null) {
//         return;
//       }
//     } catch (error) {
//       // console.log(error);
//     }
//   }
// if (userData === null) {
//    setInterval(() => {
//     console.log({userData});

//     getFromLocalForge(token);
//     getUserDataById(_id, token)

//  }, 1000);
// }


  return (
    <AuthContext.Provider value={{ userData, setUserData }}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider};
