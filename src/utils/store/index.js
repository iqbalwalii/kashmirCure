import { createStore } from "redux";
import ACTIONS from "./actions";
const initialState = {
  tab: "dashboard",
  doctors: [],
  patients: [],
};
const reducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    // Active Tab
    case ACTIONS.setActiveTab: {
      return {
        ...state,
        tab: payload,
      };
    }
    case ACTIONS.getDoctors: {
      return {
        ...state,
        doctors: payload,
      };
    }
    case ACTIONS.getPatients: {
      return {
        ...state,
        patients: payload,
      };
    }
    // Default Case
    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;
