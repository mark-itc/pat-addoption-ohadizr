import React from "react";
import { useState } from "react";
import { Between, Line, Rows,around } from "../../assets/UiKit/Line/Line";
import { Grid } from "../../assets/UiKit/grid/Gird";
import PopUpCardSearch from "./PopUpCardSearch";
export default function PetCardSearch(props) {
  // const { pet } = props;

  const [showPopUp, setShowPopUp] = useState(false);



  return (
    <div className="dogProfileCard">
      <Grid>
        <Line addClass="between">
          <h5 className="cardStatus">{props.pet.adoption_Status}</h5>
          <h3>{props.pet.name}</h3>
          <h5 className="cardType"> {props.pet.type}</h5>
        </Line>
        <Line addClass="around">
          <img className="dogProfilePicture" src={props.pet.img} />
        </Line>
        <Line addClass="between">

            <h5>{props.pet.breed}</h5>
          <Rows addClass="between">
            <h6>Bio:{props.pet.bio}</h6>
            <h6>Age:{props.pet.age}</h6>
          </Rows>
        </Line>
        <Line addClass="around">
        <button className="standardButton profileButton"
            onClick={() => setShowPopUp(true)}
        >Adopt</button>

        </Line>

      </Grid>
      { showPopUp? <PopUpCardSearch />: null}
    </div>
  );
}
