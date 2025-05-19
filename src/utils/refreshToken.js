import { config } from "@/configs";
import axios from "axios";
import { toast } from "react-toastify";
import store from "@/redux/store";
import { userLogin, userLogout } from "@/redux/auth/actions";

export function isTokenExpired(token) {
  if (!token) return true;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const exp = payload.exp;
    const now = Math.floor(Date.now() / 1000);
    return exp < now;
    // eslint-disable-next-line no-unused-vars
  } catch (e) {
    return true;
  }
}

export async function refreshToken() {
  try {
    const res = await axios.get(`${config.apiUrl}/auth/refreshToken`, {
      withCredentials: true,
    });

    const accessToken = res.data.data;
    const currentUser = store.getState().auth.user || null;

    const newSession = {
      user: currentUser,
      token: accessToken,
    };

    store.dispatch(userLogin(newSession));
    sessionStorage.setItem("auth", JSON.stringify(newSession));

    return accessToken;
  } catch (err) {
    store.dispatch(userLogout());
    toast.error("Session expired. Please log in again.");
    window.location.href = "/signin";
    throw err;
  }
}

export async function getValidToken() {
  const session = sessionStorage.getItem("auth")
    ? JSON.parse(sessionStorage.getItem("auth"))
    : null;

  let token = session?.token;

  if (isTokenExpired(token)) {
    token = await refreshToken();
  }

  return token;
}
