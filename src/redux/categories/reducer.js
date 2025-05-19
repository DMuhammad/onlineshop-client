import {
  START_FETCHING_CATEGORIES,
  SUCCESS_FETCHING_CATEGORIES,
  ERROR_FETCHING_CATEGORIES,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  status: statuslist.idle,
  message: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_CATEGORIES:
      return { ...state, status: statuslist.process, message: "" };

    case ERROR_FETCHING_CATEGORIES:
      return { ...state, status: statuslist.error, message: action.message };

    case SUCCESS_FETCHING_CATEGORIES:
      return {
        ...state,
        status: statuslist.success,
        data: action.categories,
        message: action.message,
      };

    default:
      return state;
  }
}
