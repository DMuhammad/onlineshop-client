import store from "./store";

let currentAuth;

function listener() {
  let previousAuth = currentAuth;

  currentAuth = store.getState().auth;

  if (JSON.stringify(currentAuth) !== JSON.stringify(previousAuth)) {
    sessionStorage.setItem("auth", JSON.stringify(currentAuth));
  }
}

function listen() {
  store.subscribe(listener);
}

export { listen };
