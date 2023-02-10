import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function AdoptForm() {

  const [ value1, setValue1 ] = React.useState(25);
  const [ value2, setValue2 ] = React.useState(75);
  return (
    <div>
              <Form>
          {/* <fieldset disabled> */}
          {/* <Form.Select aria-label="Default select example">
            <option>Adoption Status</option>
            <option value="1">Adopt</option>
            <option value="2">Available</option>
          </Form.Select> */}
          <h5>Adoption Status</h5>
          <Form.Check
            reverse
            label="Adopt"
  
          />
          <Form.Check
            reverse
            label="Available"
          />
          <h5>Adoption Status</h5>
          <Form.Check
            reverse
            label="Dog"
  
          />
          <Form.Check
            reverse
            label="Cat"
          />

          {/* <Form.Select aria-label="Default select example">
            <option>Type</option>
            <option value="1">Dog</option>
            <option value="2">Cat</option>
          </Form.Select> */}
          <Form.Select aria-label="Default select example">
            <option>Heights</option>
            <option value="1">less then 10cm</option>
            <option value="2">10cm-20cm</option>
            <option value="3">20cm-30cm</option>
            <option value="4">30cm-40cm</option>
            <option value="5">40cm-50cm</option>
            <option value="6">50cm-60cm</option>
            <option value="7">more then 60cm</option>
          </Form.Select>
          <Form.Select aria-label="Default select example">
            <option>Heights</option>
            <option value="1">2kg-4kg</option>          
            <option value="2">2kg-4kg</option>
            <option value="3">4kg-6kg</option>
            <option value="4">6kg-8kg</option>
            <option value="5">8kg-10kg</option>
            <option value="6">10kg-20kg</option>
            <option value="7">20kg-30kg</option>
            <option value="8">30kg-40kg</option>
            <option value="9">more then 40kg</option>
          </Form.Select>


        {/* create bootstrap range with two balls on one like and display minumun display maximum */}
          <Form.Group className="mb-3" controlId="formBasicRange">
            <Form.Label>Range</Form.Label>
            <h5
            >{value1}
            </h5>

            <Form.Control type="range" />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRange">
            <Form.Label>Range</Form.Label>
            <h5
            >{value2}
            </h5>
            <Form.Control type="range" />
          </Form.Group>
          
          <Form.Label >Name</Form.Label>
        <Form.Control
        type="text"
        placeholder="Enter Name"
      />



            {/* <Button type="submit">Submit</Button> */}
          {/* </fieldset> */}
        </Form>
    </div>
  )
}
//all required fields

// Type 
// Name
// Adoption Status (Adopted, Fostered, Available)
// Picture (Picture location URL/Path)
// Height (number)
// Weight (Number)
// Color
// Bio
// Hypoallergenic (Boolean)
// Dietary restrictions
// Breed


//get requirments:
// Adoption Status
// Type
// Height
// Weight
// Name
