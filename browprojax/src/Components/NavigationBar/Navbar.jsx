import React from 'react';
import Logo from '../Logo/Logo';
import NavItem from './NavItem';
import { useEffect } from 'react';
import { useState } from 'react';

const Navbar = () => {
  const navItems = [ 
    {label:"home"}, 
    {label:"brow services", type: "dropdownMenu"},
    {label:"spa services", type: "dropdownMenu"},
    {label:"about us"},
    {label:"contact"},
    ];
 
    const [isShrunk, setShrunk] = useState(false);
    useEffect(() => {
      const onScroll = () => {
        setShrunk((isShrunk) => {
          if (
            !isShrunk &&
            (document.body.scrollTop > 20 ||
              document.documentElement.scrollTop > 20)
          ) {
            return true;
          }
  
          if (
            isShrunk &&
            document.body.scrollTop < 4 &&
            document.documentElement.scrollTop < 4
          ) {
            return false;
          }
  
          return isShrunk;
        });
      };
  
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

  return (
    <div className={isShrunk? "navBar navBarShrunk":"navBar"}>
    <Logo isShrunk={isShrunk}/>
    <div className='navContainer'>
    {navItems.map((value) => {
      
      if(value.type  !== "dropdownMenu"){
        return <NavItem key={value.label} label={value.label} />
      }
      else{
        return <NavItem key={value.label} label={value.label} />
      }
      
    })}</div></div>
    
  )
}

export default Navbar