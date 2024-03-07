import React from "react";
import logo from "../../image/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between ">
      <div className="logo">
        <img src={logo} alt="not found" width="200px" />
      </div>
      <div className="menus flex  items-center space-x-5 mr-4">
        <Link to="/register">Register</Link>

        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
