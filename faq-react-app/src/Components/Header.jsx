import React from "react";
import './Header.css'

function Header() {
  return (
    <div className="header">
      <img
        className="header__img"
        src="https://assets-global.website-files.com/5fba23ebc651c6d16f446fc4/62388f2777982d6b8344216a_oa%20logo.svg"
      />
      <input className="header__input" type="search" />
      <button className="header__login">Login</button>
      <button className="header__creatAccount">Create Account</button>
    </div>
  );
}

export default Header;
