import { useAppDispatch, useAppSelector } from "../../hooks";
import { setUser } from "../../pages/login-register/userSlice";
import { persistor } from "../../store";
import { pulledUser } from "./Header";

const Footer = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userInfo);
  const { _id } = user as pulledUser;

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
      <h4>All rights reserved !</h4>

      {_id && (
        <button onClick={handleOnLogout} className="ml-2 text-blue-600">
          Logout
        </button>
      )}
    </div>
  );
};

export default Footer;
