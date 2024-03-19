import React from "react";
import logo from "../../image/logo.png";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { userData } from "../../helper/axios";

export interface pulledUser extends userData {
  _id: string;
}
const Header = () => {
  const { user } = useAppSelector((state) => state.userInfo);

  const { _id, fName } = (user as pulledUser) || {};

  return (
    <div className="flex justify-between bg-sky-100">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="not found" width="200px" />
        </Link>
      </div>

      <div className="menus flex  items-center space-x-5 mr-4">
        {_id ? (
          <h1>Hello ,{fName}</h1>
        ) : (
          <>
            <Link to="/register">Register</Link>

            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
