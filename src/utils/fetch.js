import axios from "axios";
import handleError from "./handleError";
import { config } from "@/configs";
import { getValidToken } from "./refreshToken";

export async function signin(url, payload) {
  try {
    const { token } = JSON.parse(sessionStorage.getItem("auth"))
      ? JSON.parse(sessionStorage.getItem("auth"))
      : null;

    return await axios.post(`${config.apiUrl}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
  } catch (err) {
    return handleError(err);
  }
}

export async function getData(url, params) {
  try {
    const token = await getValidToken();

    return await axios.get(`${config.apiUrl}${url}`, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
  } catch (err) {
    return handleError(err);
  }
}

export async function postData(url, payload, formData = false) {
  try {
    const token = await getValidToken();

    return await axios.post(`${config.apiUrl}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": formData ? "multipart/form-data" : "application/json",
      },
      withCredentials: true,
    });
  } catch (err) {
    return handleError(err);
  }
}

export async function putData(url, payload) {
  try {
    const token = await getValidToken();

    return await axios.put(`${config.apiUrl}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
  } catch (err) {
    return handleError(err);
  }
}

export async function deleteData(url) {
  try {
    const token = await getValidToken();

    return await axios.delete(`${config.apiUrl}${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
  } catch (err) {
    return handleError(err);
  }
}
