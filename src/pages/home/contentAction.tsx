import { toast } from "react-toastify";
import { contentData, postContent } from "../../helper/axios";
import { Dispatch } from "@reduxjs/toolkit";

export const postContentAction =
  (formData: contentData) => async (dispatch: Dispatch) => {
    const response = await postContent(formData);
    console.log(response);

    if (response) {
      const { status, message } = response;
      (toast as any)[status](message);
    }
  };
