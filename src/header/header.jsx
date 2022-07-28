import React from "react";
import {Link} from "react-router-dom";

import "./header.css";
import anya from './spy1.png';



function Header(){
    return(
      <header className="header">
          <div className="header__logo"><h1 style={{color:"#9009"}}>Anime-list</h1><img src= {anya} alt="" /></div>
          <nav className="header__nav">
            <Link className="header__link" to="/">Home</Link>
            <Link className="header__link"  to="/user">User</Link>
            <Link className="header__link"  to="/adfadf">404</Link>
          </nav>
      </header>
    )
}
export default Header 