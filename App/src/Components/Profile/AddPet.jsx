import React, { useEffect, useState } from "react";

export default function AddPet() {

    const [formData, setFormData] = useState({
      type: "",
      name: "",
      height: "",
      weight: "",
      color: "",
      bio: "",
      age: "",
      hypoallergenic: false,
      dietary_restrictions: "",
      breed: "",
    });
    

    const handleSubmit = (event) => {
      event.preventDefault();
      setFormData({
        type: "",
        name: "",
        height: "",
        weight: "",
        color: "",
        bio: "",
        age: "",
        hypoallergenic: false,
        dietary_restrictions: "",
        breed: "",
      });
    };
    useEffect(() => {
      // console.log(formData);
    }, []);

    const handleInputChange = (event) => {
      const { name, value, type, checked } = event.target;
      const newValue = type === "checkbox" ? checked : value;
      setFormData({ ...formData, [name]: newValue });
    };
    return (
        <>
      <form onSubmit={handleSubmit}>
      <h1>Add a Pet</h1>
        <div className="formLine">
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          />
        </div>
        <div className="formLine">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="formLine">
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
          />
        </div>
        <div className="formLine">
          <label htmlFor="weight">Weight:</label>
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
          />
        </div>
        <div className="formLine">
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
          />
        </div>
        <div className="formLine">
          <label htmlFor="bio">Bio:</label>
          <input
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
          />
        </div>
        <div className="formLine">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
        <div className="formLine">
          <label htmlFor="hypoallergenic">Hypoallergenic:</label>
          <input
            type="checkbox"
            name="hypoallergenic"
            checked={formData.hypoallergenic}
            onChange={handleInputChange}
          />
        </div>
        <div className="formLine">
          <label htmlFor="dietary_restrictions">Dietary Restrictions:</label>
          <input
            type="text"
            name="dietary_restrictions"
            value={formData.dietary_restrictions}
            onChange={handleInputChange}
          />
        </div>
        <div className="formLine">
          <label htmlFor="breed">Breed:</label>
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit nakedButton">Add Pet</button>
      </form>
      </>
    );
  };


