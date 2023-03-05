import React from 'react'
import { useState, useContext } from 'react'
import { Grid } from "../assets/UiKit/grid/Gird";
import { Line,Rows } from "../assets/UiKit/Line/Line";

import { AuthContext } from ".././AuthContextProvider";

export default function Profile() {
  const { userData } = useContext(AuthContext);
  console.log(userData);
  // const [f_name, setF_name] = useState(userData.f_name);
  // const [l_name, setL_name] = useState(userData.l_name);
  // const [email, setEmail] = useState(userData.email);
  // const [phone_num, setPhone_num] = useState(userData.phone_num);
  // const [bio, setBio] = useState(userData.bio);
  return (
    <div>

        <h2>Profile + </h2>


      
    </div>
  )
}


//update user info
//update user password
//add dog form
//manage dogs