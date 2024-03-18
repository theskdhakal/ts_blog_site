import axios from "axios";
import { useAppSelector } from "../hooks";

const rootAPI: string = "https://ts-blog-backend.onrender.com";

const userAPI: string = rootAPI + "/api/v1/user";

const contentAPI: string = rootAPI + "/api/v1/content";

export interface userData {
  fName?: string;
  lName?: string;
  email: string;
  password: string;
}

export interface contentData {
  title: string;
  post: string;
  author: string;
  authorId: string;
}

interface ErrorResponse {
  status: string;
  message: String;
}

//=============================== USER ===========================//
export const postUser = async (formData: userData) => {
  try {
    console.log(formData);
    const resp = await axios.post(userAPI, formData);

    return resp.data;
  } catch (error: any) {
    const errorResponse: ErrorResponse = {
      status: "error",
      message: error.message || "An error occurred",
    };
    return errorResponse;
  }
};

export const loginUser = async (formData: userData) => {
  try {
    const resp = await axios.post(userAPI + "/login", formData);

    console.log(resp.data);
    return resp.data;
  } catch (error: any) {
    const errorResponse: ErrorResponse = {
      status: "error",
      message: error.message || "An error occured",
    };
    return errorResponse;
  }
};

//===============================CONTENT ========================//

export const postContent = async (formData: contentData) => {
  try {
    const resp = await axios.post(contentAPI, formData);

    return resp.data;
  } catch (error: any) {
    const errorResponse: ErrorResponse = {
      status: "error",
      message: error.message || "An error Occured",
    };
    return errorResponse;
  }
};

export const getAllContent = async () => {
  try {
    const resp = await axios.get(contentAPI);

    return resp.data;
  } catch (error: any) {
    const errorResponse: ErrorResponse = {
      status: "error",
      message: error.message || "An error occured",
    };
    return errorResponse;
  }
};

export const deleteContent = async (contentId: string, userId: string) => {
  try {
    const resp = await axios.delete(contentAPI + "/" + contentId, {
      headers: {
        Authorization: userId,
      },
    });
    return resp.data;
  } catch (error: any) {
    const errorResponse: ErrorResponse = {
      status: "error",
      message: error.message || "An error occured",
    };
    return errorResponse;
  }
};
