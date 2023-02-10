import './assets/scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './layouts/Footer'
import Head from './layouts/Head'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import { Routes, Route, } from "react-router-dom";
import OurMission from './Pages/OurMission';
import Adopt from './Pages/Adopt';

function App() {
  return (
  <>
   <Head/> 
   <Routes>
      <Route path=""   >
        <Route path="" element={ <Home/>} />
        <Route path="contact" element={ <Contact/>} />
        <Route path="ourmission" element={ <OurMission/>} />
        <Route path="adopt" element={ <Adopt/>} />
      </Route>
     
      </Routes>
  <Footer/>
 
  </>
  );
}

export default App;
