import React from "react";
import localforage from "localforage";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

class PetsApi extends React.Component {
//   async getPetData() {
//     const web = "http://localhost:8000/pets";
//     try {
//       const response = await fetch(web);
//       const results = await response.json();
//       return results;
//     } catch (error) {
//       console.log(error);
//     }
//   } //tested and working

  async createPet(pet) {
    const web = "http://localhost:8000/pet";
    try {
      const response = await fetch(web, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pet),
      });
      const results = await response.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  } //untested

  async getPetById(id) {
    const web = `http://localhost:8000/pets/${id}`;
    try {
      const response = await fetch(web);
      const results = await response.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  } //untested

  async getPetByUserId(id) {
    const web = `http://localhost:8000/pets/user/${id}`;
    try {
      const response = await fetch(web);
      const results = await response.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  } //untested

  async updatePet(id, pet) {
    const web = `http://localhost:8000/pet/${id}`;
    try {
      const response = await fetch(web, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pet),
      });
      const results = await response.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  } //untested\

  async filtered(filter) {
    console.log("filtered");

    const url = "http://localhost:8000/pet";
    // const filter= {type: "cat"}
    try {

      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filter),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}
export default PetsApi;
