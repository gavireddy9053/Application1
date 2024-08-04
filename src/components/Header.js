import React, { useState } from 'react';
import '../header.css'

function Header() {
  let [switched,setSwitched] = useState(false)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"> 
          <img src='https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.jpg' height='50px' width='100px'/>
          </a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-Link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-Link" href="/offers">Offers</a>
              </li>
              <li className="nav-item">
                <a className="nav-Link" href="/help">Help</a>
              </li>
              <li className="nav-item">
                <a className="nav-Link" href='/cart'>Cart</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
