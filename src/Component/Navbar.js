import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return(
      
   <nav>
      <Link to="/about" className="link">  About</Link>
      &nbsp;&nbsp;
      <Link to="/">Home</Link>&nbsp;&nbsp;
      <Link to="/contact"className="link">Contact</Link>
  </nav>
      
      
  );
}
export default Navbar;