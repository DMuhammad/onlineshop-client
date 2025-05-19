import { USER_LOGIN, USER_LOGOUT } from "./constants";

export function userLogin(userData) {
  return {
    type: USER_LOGIN,
    payload: userData,
  };
}

export function userLogout() {
  sessionStorage.removeItem("auth");
  return {
    type: USER_LOGOUT,
  };
}
