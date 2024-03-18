import { toast } from "react-toastify";
import {
  contentData,
  deleteContent,
  getAllContent,
  postContent,
} from "../../helper/axios";
import { Dispatch } from "@reduxjs/toolkit";
import { setContents } from "./contentSlice";

export const postContentAction =
  (formData: contentData) => async (dispatch: Dispatch) => {
    const response = await postContent(formData);

    if (response) {
      const { status, message } = response;
      (toast as any)[status](message);
      (dispatch as any)(getAllContentAction());
    }
    return response;
  };

export const getAllContentAction = () => async (dispatch: Dispatch) => {
  const response = await getAllContent();

  if (response) {
    const { allContent } = response;
    dispatch(setContents(allContent));
  }
};

export const deleteContentAction =
  (contentId: string, userId: string) => async (dispatch: Dispatch) => {
    if (!window.confirm("Are you sure you want to delete it?")) {
      return;
    }

    const response = await deleteContent(contentId, userId);

    if (response) {
      const { status, message } = response;

      (toast as any)[status](message);
      (dispatch as any)(getAllContentAction());
    }
  };
