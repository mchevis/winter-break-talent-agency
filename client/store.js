import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import loggerMiddleware from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

//ACTION TYPES
const GOT_SKILLS = "GOT_SKILLS";
const GOT_CLIENTS = "GOT_CLIENTS";
const UPDATED_SKILL = "UPDATED_SKILL";
const GOT_CLIENTSKILLS = "GOT_CLIENTSKILLS";
const ADDED_CLIENTSKILL = "ADDED_CLIENTSKILL";
const DELETED_CLIENTSKILL = "DELETED_CLIENTSKILL";

//ACTION CREATORS
const gotSkills = (skills) => ({
  type: GOT_SKILLS,
  skills,
});

const gotClients = (clients) => ({
  type: GOT_CLIENTS,
  clients,
});

const gotClientSkills = (clientSkills) => ({
  type: GOT_CLIENTSKILLS,
  clientSkills,
});

const updatedSkill = (skill) => ({
  type: UPDATED_SKILL,
  skill,
});

const addedClientSkill = (clientSkill) => ({
  type: ADDED_CLIENTSKILL,
  clientSkill,
});

const deletedClientSkill = (clientSkill) => ({
  type: DELETED_CLIENTSKILL,
  clientSkill,
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

export const fetchClientSkills = () => {
  return async (dispatch) => {
    const { data: clientSkills } = await axios.get("/api/clientSkills");
    dispatch(gotClientSkills(clientSkills));
  };
};

export const updateSkill = (skillId, newName, history) => {
  return async (dispatch) => {
    const { data: skill } = await axios.put(`/api/skills/${skillId}`, {
      newName,
    });
    dispatch(updatedSkill(skill));
    history.push("/");
  };
};

export const addClientSkill = (clientId, skillId) => {
  return async (dispatch) => {
    const { data: clientSkill } = await axios.post(`api/clientSkills`, {
      clientId,
      skillId,
    });
    dispatch(addedClientSkill(clientSkill));
  };
};

export const deleteClientSkill = (csId) => {
  return async (dispatch) => {
    const { data: clientSkill } = await axios.delete(
      `api/clientSkills/${csId}`
    );
    dispatch(deletedClientSkill(clientSkill));
  };
};

//INITAL STATE
const initialState = {
  skills: [],
  clients: [],
  clientSkills: [],
};

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_SKILLS:
      return { ...state, skills: action.skills };
    case GOT_CLIENTS:
      return { ...state, clients: action.clients };
    case GOT_CLIENTSKILLS:
      return { ...state, clientSkills: action.clientSkills };
    case UPDATED_SKILL:
      return {
        ...state,
        skills: state.skills.map((s) =>
          s.id === action.skill.id ? action.skill : s
        ),
      };
    case ADDED_CLIENTSKILL:
      return {
        ...state,
        clientSkills: [...state.clientSkills, action.clientSkill],
      };
    case DELETED_CLIENTSKILL:
      return {
        ...state,
        clientSkills: state.clientSkills.filter(
          (cs) => cs.id !== action.clientSkill.id
        ),
      };
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
