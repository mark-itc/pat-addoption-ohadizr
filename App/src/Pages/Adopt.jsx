import React from "react";
import { useState, useEffect } from "react";
import AdoptForm from ".././Components/AdoptPage/AdoptForm";
import PetCardSearch from ".././Components/AdoptPage/PetCardSearch";
import  PetsApi from "../Data/PetApi";
import "../assets/scss/Adopt.scss";
import { Between, Line, Rows } from  '../assets/UiKit/Line/Line'
import { Grid } from  "../assets/UiKit/grid/Gird";
// import { adoption_status, type, height, weight, age } from ".././Components/AdoptPage/AdoptForm";
export default function Adopt() {
  const petApi = new PetsApi();
  const [filter , setFilter] = useState( {})
  const [petArr, setPetArr] = useState([])
  

  const getPetData = async () => {
    const petData = await petApi.filtered(filter)
    setPetArr(petData)
  }
  

  useEffect(() => {
    console.log(dataFromChild, "dataFromChild");
  


    // setFilter(obj)
    console.log(filter, "filter");


    getPetData(filter)
  }, [])
  
  

const cardsList = petArr.map((pet) => {

      return <PetCardSearch pet={pet} />
    });
  
    //getting data from child
  const [dataFromChild, setDataFromChild] = useState([]);
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    // console.log(data, "data");
  };
  

  return (
    
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
  );
}
