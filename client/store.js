import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import loggerMiddleware from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

//ACTION TYPES
const GOT_SKILLS = "GOT_SKILLS";
const GOT_CLIENTS = "GOT_CLIENTS";

//ACTION CREATORS
const gotSkills = (skills) => ({
  type: GOT_SKILLS,
  skills,
});

const gotClients = (clients) => ({
  type: GOT_CLIENTS,
  clients,
});

//THUNKS
export const fetchSkills = () => {
  return async (dispatch) => {
    const { data: skills } = await axios.get("/api/skills");
    dispatch(gotSkills(skills));
  };
};

export const fetchClients = () => {
  return async (dispatch) => {
    const { data: clients } = await axios.get("/api/clients");
    dispatch(gotClients(clients));
  };
};

//INITAL STATE
const initialState = {
  skills: [],
  clients: [],
};

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_SKILLS:
      return { ...state, skills: action.skills };
    case GOT_CLIENTS:
      return { ...state, clients: action.clients };
    default:
      return state;
  }
};

//STORE
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, loggerMiddleware))
);

export default store;
