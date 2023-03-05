import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DoubleRangeSlider from "../../assets/UiKit/premade_componenets/DoubleRangeSlider/DoubleRangeSlider";
import Offcanvas from "react-bootstrap/Offcanvas";
export default function AdoptForm(props) {
  const [adoption_status, setAdoptionStatus] = useState(null);
  const [adopt, setAdopt] = useState(null);
  const [available, setAvailable] = useState(null);
  const [foster, setFoster] = useState(null);

  const [type, setType] = useState(null);
  const [dog, setDog] = useState(null);
  const [cat, setCat] = useState(null);
  const [other, setOther] = useState(null);

  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [age, setAge] = useState(null);

  //calback to parent
  setTimeout(() => {
    // props.onData(adoption_status, type, height, weight, age)
    props.onData([adoption_status, type]);
  }, 50000);

  //side bar
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //form functions

  const handleAdoptStatus = (e) => {
    if (e.target.checked) {
      setAdopt(e.target.value);
    } else {
      setAdopt(null);
    }
  };
  const handleAvailableStatus = (e) => {
    if (e.target.checked) {
      setAvailable(e.target.value);
    } else {
      setAvailable(null);
    }
  };
  const handleFosterStatus = (e) => {
    if (e.target.checked) {
      setFoster(e.target.value);
    } else {
      setFoster(null);
    }
  };
  useEffect(() => {
    setAdoptionStatus(
      [adopt, available, foster].filter((item) => item !== null)
    );
  }, [adopt, available, foster]);

  //type
  const handleDog = (e) => {
    if (e.target.checked) {
      setDog(e.target.value);
    } else {
      setDog(null);
    }
  };
  const handleCat = (e) => {
    if (e.target.checked) {
      setCat(e.target.value);
    } else {
      setCat(null);
    }
  };

  const handleOther = (e) => {
    if (e.target.checked) {
      setOther(e.target.value);
    } else {
      setOther(null);
    }
  };

  useEffect(() => {
    setType([dog, cat, other].filter((item) => item !== null));
  }, [dog, cat, other]);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Search
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <h5>Adoption Status</h5>
            <Form.Check
              reverse
              label="Adopted"
              name={"adopted"}
              value={"adopted"}
              onChange={(e) => handleAdoptStatus(e, "adopted")}
            />
            <Form.Check
              reverse
              label="Available"
              value={"Available"}
              onChange={(e) => handleAvailableStatus(e, "available")}
            />
            <Form.Check
              reverse
              label="Foster"
              value={"Foster"}
              onChange={(e) => handleFosterStatus(e, "foster")}
            />
            <h5>Type</h5>
            <Form.Check
              reverse
              label="Dog"
              value={"Dog"}
              onChange={(e) => handleDog(e, "dog")}
            />
            <Form.Check
              reverse
              label="Cat"
              value={"Cat"}
              onChange={(e) => handleCat(e, "cat")}
            />
            <Form.Check
              reverse
              label="Other"
              value={"Other"}
              onChange={(e) => handleOther(e, "other")}
            />

            <DoubleRangeSlider
              // maxValue={5}
              // minValue={0}
              // step={0.1}
              // defaultValue={[2, 5]}
              max={5}
              min={0}
              minValueBetween
              // values={[2, 5]}
              // onChange={(values) => console.log(values)}
            />
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
