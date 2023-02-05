import './assets/scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './layouts/Footer'
import Head from './layouts/Head'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import { Routes, Route, } from "react-router-dom";

function App() {
  return (
  <>
   <Head/> 
   <Routes>
      <Route path=""   >
        <Route path="" element={ <Home/>} />
        <Route path="contact" element={ <Contact/>} />
      </Route>
     
      </Routes>
  <Footer/>
 
  </>
  );
}

export default App;
