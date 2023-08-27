import React from 'react'
import {  Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css"

function Navbar() {
    const { loginWithRedirect } = useAuth0();
    const { logout,isAuthenticated,user } = useAuth0();
  return (
   <header>
      
<div className="navbar">
  <a href="/" className="logo">RESALE</a>
  <ul className="navmenu">
    <li><a href="/">home</a></li>
    <li><a href="/shop">shop</a></li>
    <li><a href="/pages">pages</a></li>
    <li><a href="/product">product</a></li>
  </ul>
  <div className="nav-icon">
    <a href="#"><i className='bx bx-search'></i></a>
    
    <a href="#"><i className='bx bx-cart'></i></a>
    {isAuthenticated && <p>{user.name}</p>}
    {
      isAuthenticated ? (
      <button className="main-btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
</button>
   ) :(
  <button className="main-btn" onClick={() => loginWithRedirect()}>Login</button>
   )
  }

   

    

    <div className="bx bx-menu" id="menu-icon"></div>
  </div>
</div>


    </header>
  )
}

export default Navbar