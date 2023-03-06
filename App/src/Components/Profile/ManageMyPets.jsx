import React, { useState } from 'react';
// import AddPetForm from './AddPetForm';
// import PetList from './PetList';


export default function ManageMyPets() {

        const [pets, setPets] = useState([]);
      
        const handleAddPet = (newPet) => {
          setPets([...pets, newPet]);
        };
      
        const handleRemovePet = (petIndex) => {
          const newPets = [...pets];
          newPets.splice(petIndex, 1);
          setPets(newPets);
        };
  return (
    <div>
          <div className="dashboard">
      <h1>My Pets</h1>
      {/* <AddPetForm onSubmit={handleAddPet} /> */}
      {pets.length > 0 ? (
        {/* <PetList pets={pets} onRemovePet={handleRemovePet} /> */}
      ) : (
        <p>You don't have any pets yet. Add one using the form above!</p>
      )}
    </div>

    </div>
  )
}


