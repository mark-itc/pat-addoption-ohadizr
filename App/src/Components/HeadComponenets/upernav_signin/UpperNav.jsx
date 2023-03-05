import React from 'react'
import {useContext} from 'react'
import { useNavigate  } from "react-router-dom";
import logo from '../../.././assets/Photos/logo 03 standard.png'
import { Between, Line, Rows,around } from '../../../assets/UiKit/Line/Line'
import { Grid } from "../../../assets/UiKit/grid/Gird";
import { AuthContext } from '../../../AuthContextProvider'
import UserApi from '../../../Data/UserApi';



export default function UpperNav() {
  const userApi= new UserApi();
  const {userData} = useContext(AuthContext)
  const navigate = useNavigate();
  const auth =false
  return (
    <div className='UpperNav'>
    <h5 className='nakedButton topNavButton'>*search*</h5>
    <img
      src={logo}
      alt='logo'
      className='topNavLogo'
    />
    { auth === true ? <h5 className='nakedButton topNavButton '>Profile</h5> : 
    <Line addClass="between">
    {userData? 
    <>
      <button className='nakedButton topNavButton ' onClick={() => navigate("/Profile")}>Profile</button>
      <button className='nakedButton topNavButton ' onClick={ () => {
        userApi.logout(); 
        }
      }>Logout</button>
      </>
    :
    <>
      <button className='nakedButton topNavButton ' onClick={() => navigate("/Register")}>Register</button>
    <button className='nakedButton topNavButton ' onClick={() => navigate("/Login")}>Login</button>
    </>
   }

    </Line>
  }
    </div>
  )
}
