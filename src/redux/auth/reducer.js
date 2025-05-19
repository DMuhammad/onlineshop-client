import { USER_LOGIN, USER_LOGOUT } from "./constants";

const initialState = (() => {
  const saved = sessionStorage.getItem("auth");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return { user: null, token: null };
    }
  }
  return { user: null, token: null };
})();

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      };

    default:
      return state;
  }
}
