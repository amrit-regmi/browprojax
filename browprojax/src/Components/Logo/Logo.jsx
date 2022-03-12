import React from 'react';

const Logo = ({isShrunk}) =>{
  return (
    <div className={isShrunk? "logo logoSmall":"logo logoBig"}>
      <div >BROW PRO</div>
      <div>jax</div>
    </div>
    
  )
}

export default Logo
