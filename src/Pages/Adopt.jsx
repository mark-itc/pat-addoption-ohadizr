import React from "react";
import { useState, useEffect } from "react";
import AdoptForm from ".././Components/AdoptPage/AdoptForm";
import PetCardSearch from ".././Components/AdoptPage/PetCardSearch";
import { getPetData } from "../Data/getPetData";
import "../assets/scss/Adopt.scss";
import { Between, Line, Rows } from  '../assets/UiKit/Line/Line'
import { Grid } from  "../assets/UiKit/grid/Gird";
export default function Adopt() {
  const [petArr, setPetArr] = useState([]);
  const getPetCardData = async () => {
    const results = await getPetData();
    setPetArr(results);
    return { success: true, results: results };
  };
  useEffect(() => {
    getPetCardData();
    console.log("petArray", petArr);
  }, []);

  const cardsList = petArr.map((pet) => {
    return <PetCardSearch pet={pet} />;
  });

  return (
    <div className="adoptContainer">
      <div className="adoptHeader">
        <h1>Adopt a Pet</h1>
      </div>

      <div className="sideNav">
        <AdoptForm />
      </div>
      <div className="petsContainer">

   
      <Line addClass="between">
      {cardsList}
      </Line>
      </div>
    </div>
  );
}
