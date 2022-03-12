import React from 'react';

const NavItem = ({label}) => {
  return <div className='navItem'>{label.toUpperCase()}</div>
}

export default NavItem