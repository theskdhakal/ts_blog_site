import { toast } from "react-toastify";
import { loginUser, userData } from "../../helper/axios";
import { setUser } from "./userSlice";
import { Dispatch } from "@reduxjs/toolkit";

export const loginUserAction =
  (formData: userData) => async (dispatch: Dispatch) => {
    const { status, message, user } = await loginUser(formData);
    (toast as any)[status](message);

    if (status === "success") {
      dispatch(setUser(user));
    }
  };
