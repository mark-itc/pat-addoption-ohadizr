import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
export default function LowerNavPhone() {
  const navigate = useNavigate();
  return (
    <Dropdown >
      <Dropdown.Toggle variant="transparent" id="dropdown-basic">
      <h1 className="nakedButton">...</h1>
        
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="LowerNav">
          <button className="nakedButton" onClick={() => navigate("/")}>
            HOME
          </button>
          <button className="nakedButton" onClick={() => navigate("/adopt")}>
            ADOPT
          </button>
          <button className="nakedButton" onClick={() => navigate("/about")}>
            ABOUT
          </button>
          <button
            className="nakedButton"
            onClick={() => navigate("/community")}
          >
            COMMUNITY
          </button>
          <button className="nakedButton" onClick={() => navigate("/contact")}>
            CONTACT
          </button>
          <button className="nakedButton" onClick={() => navigate("/support")}>
            SUPPORT
          </button>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}
