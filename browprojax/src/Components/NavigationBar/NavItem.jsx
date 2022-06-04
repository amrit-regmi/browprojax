import React from 'react';
import {Link} from 'react-scroll'

const NavItem = ({label}) => {
  return <Link to={label.replace(" ","")}  activeClass="active" spy={true} smooth={true} className='navItem' offset={-100}>{label.toUpperCase()}</Link>
}

export default NavItem