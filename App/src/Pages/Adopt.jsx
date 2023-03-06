import React from "react";
import { useState, useEffect } from "react";
import AdoptForm from ".././Components/AdoptPage/AdoptForm";
// import PetCardSearch from ".././Components/AdoptPage/PetCardSearch";
import  PetsApi from "../Data/PetApi";
import "../assets/scss/Adopt.scss";
import { Between, Line, Rows } from  '../assets/UiKit/Line/Line'
import { Grid } from  "../assets/UiKit/grid/Gird";
import Card from ".././assets/UiKit/premade_componenets/card/Card";
// import { adoption_status, type, height, weight, age } from ".././Components/AdoptPage/AdoptForm";
export default function Adopt() {
  const petApi = new PetsApi();
  const [filter , setFilter] = useState( {})
  const [petArr, setPetArr] = useState([])
  

  const getPetData = async () => {
    const petData = await petApi.filtered(filter)
    setPetArr(petData)
  }
  


    async function fetchData() {
      const petData = await petApi.filtered(filter)
      setPetArr(petData)

    }

    if (petArr.length === 0) {
      fetchData();
    }


  const cardsList = petArr.map((pet) => {
    console.log(pet, "pet");
    return ( <Card pet={pet} />)
  });
  
  const [dataFromChild, setDataFromChild] = useState([]);
  const handleDataFromChild = (data) => {
    setDataFromChild(data);

  };
  

  return (
    <Grid>
  <Line>



    <div className="adoptContainer">
      <div className="adoptHeader">
        <h1>Adopt a Pet</h1>
      </div>

      <div className="sideNav">
      
        <AdoptForm 

        onData={handleDataFromChild}

        />
      </div>
      <div className="petsContainer">

   
      <Line addClass="between">
      {cardsList} 
      </Line>
      </div>
    </div>
    </Line>
    </Grid>
  );
}
