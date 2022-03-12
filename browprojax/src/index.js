import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Components/NavigationBar/Navbar';
import Home from './Components/Pages/Home';
import AboutUs from './Components/Pages/AboutUs';
import Services from './Components/Pages/Services';
import ContactUs from './Components/Pages/ContactUs';


ReactDOM.render(
  <React.StrictMode>
    <div style={{width:"100vw", height:"100vh",backgroundColor:"black"}}>
    <center>
      <img style={{maxHeight: "99vh", maxWidth: "100vw"}}src={require("./Images/opening.jpg") } alt="opening"></img>
      <img style={{maxHeight: "99vh", maxWidth: "100vw"}}src={require("./Images/services.jpg") } alt="opening"></img>
    </center>

    </div>
    
    {/*<Navbar/>
    <Home/>
    <AboutUs/>
    <Services/>
<ContactUs/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

