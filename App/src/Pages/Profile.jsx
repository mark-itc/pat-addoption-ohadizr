import React from "react";
import { useState, useContext } from "react";
import { Grid } from "../assets/UiKit/grid/Gird";
import { Line, Rows } from "../assets/UiKit/Line/Line";
import Tabs from ".././assets/UiKit/premade_componenets/tabs/Tabs";
import AddPet from ".././Components/Profile/AddPet";
import ManageMyPets from ".././Components/Profile/ManageMyPets";
import Loading from '../assets/UiKit/premade_componenets/loading/Loading'
import { AuthContext } from ".././AuthContextProvider";
import ".././assets/scss/Profile.scss";


export default function Profile() {
  const { userData } = useContext(AuthContext);

  const [f_name, setF_name] = useState(userData.f_name);
  const [l_name, setL_name] = useState(userData.l_name);
  const [email, setEmail] = useState(userData.email);
  const [phone_num, setPhone_num] = useState(userData.phone_num);
  const [bio, setBio] = useState(userData.bio);
  

  return (
    <div className="profileContainer">
      <Grid>
      <Line>
        <h2>{f_name + " " + l_name}</h2>
        <h3> Pet Page</h3>

      </Line>
      {userData ?
        <Tabs
          tab1="Profile"
          Tab2="Dogs"
          Tab3="AddPet"
          child1={"Profile"}
          child2={<ManageMyPets />}
          child3={<AddPet />}
        />: <Loading/>}
        
      </Grid>
    </div>
  );
}


