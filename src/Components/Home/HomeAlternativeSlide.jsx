import Carousel from 'react-bootstrap/Carousel';
import volunteer from "../../assets/Photos/volunteer.jpg";
import Donate from "../../assets/Photos/Donate.jpg";
import Foster from "../../assets/Photos/Foster.jpg";
function HomeAlternativeSlide() {
  return (
    <Carousel slide={false}>

      <Carousel.Item>
      <div className="TaskContainer slide">
          <div className="taskTitle">
          <h5 className="taskTitleText">Volunteer </h5>
          </div>
           <div className="buttonDiv">
          <button className="taskButton standardButton">volunteer </button>
          </div>
          <img className="taskImg" 
            src={volunteer}
            alt="dog"
          />
          <div className="taskDescription">
          <h6  >Make a positive impact on animals by volunteering at a shelter.</h6>
          </div>

          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="TaskContainer slide ">
          <div className="taskTitle">
          <h5 className="taskTitleText">fostering</h5>
          </div>
           <div className="buttonDiv">
          <button className="taskButton standardButton">text</button>
          </div>
          <img className="taskImg" 
            src={Foster}
            alt="dog"
          />
          <div className="taskDescription">
          <h6  >Fostering means endless cuddles and puppy love!</h6>
          </div>

 
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="TaskContainer slide active">
          <div className="taskTitle">
          <h5 className="taskTitleText">fostering</h5>
          </div>
           <div className="buttonDiv">
          <button className="taskButton standardButton">text</button>
          </div>
          <img className="taskImg" 
            src={Donate}
            alt="dog"
          />
          <div className="taskDescription">
          <h6  >Fostering means endless cuddles and puppy love!</h6>
          </div>

          </div>
          
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeAlternativeSlide;