import { toast } from "react-toastify";
import { contentData, getAllContent, postContent } from "../../helper/axios";
import { Dispatch } from "@reduxjs/toolkit";
import { setContents } from "./contentSlice";

export const postContentAction =
  (formData: contentData) => async (dispatch: Dispatch) => {
    const response = await postContent(formData);
    console.log(response);

    if (response) {
      const { status, message } = response;
      (toast as any)[status](message);
      (dispatch as any)(getAllContentAction());
    }
  };

export const getAllContentAction = () => async (dispatch: Dispatch) => {
  const response = await getAllContent();

  if (response) {
    const { allContent } = response;
    dispatch(setContents(allContent));
  }
};
