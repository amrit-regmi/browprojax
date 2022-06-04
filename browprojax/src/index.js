import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/NavigationBar/Navbar';
import Home from './Components/Pages/Home';
import AboutUs from './Components/Pages/AboutUs';
import Services from './Components/Pages/Services';
import ContactUs from './Components/Pages/ContactUs';


ReactDOM.render(
  <React.StrictMode> 
   <Navbar/>
    <Home/>
    <AboutUs/>
    <Services/>
<ContactUs/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

