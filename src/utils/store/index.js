import { createStore } from "redux";
import ACTIONS from "./actions";
const initialState = {
  tab: "dashboard",
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
    // Default Case
    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;
