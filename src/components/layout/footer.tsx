import React from "react";
import { useAppDispatch } from "../../hooks";
import { setUser } from "../../pages/login-register/userSlice";
import { persistor } from "../../store";

const Footer = () => {
  const dispatch = useAppDispatch();

  const handleOnLogout = () => {
    //remove from persist
    persistor.purge().then(() => {
      console.log("logged out");
    });

    //remove user from redux
    dispatch(setUser({}));
  };

  return (
    <div className="text-center py-3 bg-sky-100  w-full">
      All rights reserved !
      <button onClick={handleOnLogout} className="ml-2 text-blue-600">
        Logout
      </button>
    </div>
  );
};

export default Footer;
