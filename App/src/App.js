import './assets/scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './layouts/Footer'
import HeaderSigned from './layouts/HeaderSigned'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import { Routes, Route, } from "react-router-dom";
import OurMission from './Pages/OurMission';
import Adopt from './Pages/Adopt';
import Signup from './Pages/Signup';
import { useState, useEffect } from 'react';
import HeaderUnSigned from './layouts/HeaderUnSigned';
function App() {


//console log "all the way button" when the user scrolls to the bottom of the page
  const [bottomOfPage, setBottomOfPage] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const bottom =


        Math.ceil(window.innerHeight + window.scrollY) >= 
        document.documentElement.scrollHeight;
      if (bottom) {

        setBottomOfPage(true);
      } else {
        setBottomOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  return (
  <>
  <div className='appContainer'>
  <div className='headerApp'>
  {/* <HeaderSigned/>  */}
  <HeaderUnSigned/> 
  </div>
<div className='bodyApp'>
   <Routes>
      <Route path=""   >
        <Route path="" element={ <Home/>} />
        <Route path="contact" element={ <Contact/>} />
        <Route path="ourmission" element={ <OurMission/>} />
        <Route path="adopt" element={ <Adopt/>} />
        <Route path="singup" element={ <Signup/>} />
      </Route>
     
      </Routes>
  </div>
  
 <div className='footerApp'>
 {bottomOfPage ? <Footer/>: null}
 </div>
 </div>
  </>
  );
}

export default App;
