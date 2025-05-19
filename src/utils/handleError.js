import { toast } from "react-toastify";
import axios from "axios";
import { refreshToken } from "./refreshToken";

const handleError = async (error) => {
  const originalRequest = error.config;

  if (
    error.response?.data?.errors?.message === "jwt expired" &&
    !originalRequest._retry
  ) {
    originalRequest._retry = true;

    try {
      const newToken = await refreshToken();
      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      return axios(originalRequest);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  const message =
    error.response?.data?.errors?.message || "Something went wrong";
  toast.error(message);

  return Promise.reject(error);
};

export default handleError;
