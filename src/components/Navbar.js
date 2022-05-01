import React from 'react';
import Image from '../images/img5.jpg';

export default function Navbar() {
  return (
    <nav>
      <img src={Image} alt='' className='nav--logo' />
    </nav>
  );
}
