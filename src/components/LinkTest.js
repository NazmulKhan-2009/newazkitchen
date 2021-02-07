import React from 'react';
import { Link } from 'react-router-dom';

const LinkTest = () => {
 return (
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className="nav-link active" aria-current="page" to="/gallery">Gallery</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>

  
          
 );
};

export default LinkTest;