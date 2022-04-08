import { createStore } from "redux";
import ACTIONS from "./actions";
import Cookies from "js-cookie";
const initialState = {
  tab: "dashboard",
  doctors: [],
  patients: [],
  doctor: {},
  appointments: [],
  blogs: [],
  user: Cookies.get("user") ? JSON.parse(Cookies.get("user")) : {},
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
    case ACTIONS.getActiveDoctors: {
      return {
        ...state,
        activeDoctors: payload,
      };
    }
    case ACTIONS.getInActiveDoctors: {
      return {
        ...state,
        inActivedoctors: payload,
      };
    }
    case ACTIONS.getPatients: {
      return {
        ...state,
        patients: payload,
      };
    }
    case ACTIONS.getDoctor: {
      return {
        ...state,
        doctor: payload,
      };
    }
    case ACTIONS.getAppointments: {
      return {
        ...state,
        appointments: payload,
      };
    }
    case ACTIONS.getAppointment: {
      return {
        appointment: payload,
      };
    }
    case ACTIONS.getAds: {
      return {
        ...state,
        ads: payload,
      };
    }
    case ACTIONS.setAd: {
      return {
        ...state,
        ad: payload,
      };
    }
    case ACTIONS.setUser: {
      Cookies.set("user", JSON.stringify(payload));
      return {
        ...state,
        user: { ...payload, loggedIn: true },
      };
    }
    case ACTIONS.setAd: {
      return {
        ...state,
        ad: payload,
      };
    }
    case ACTIONS.logOut: {
      return {};
    }
    case ACTIONS.getBlogs: {
      return {
        ...state,
        blogs: payload,
      };
    }
    case ACTIONS.setBlog: {
      return {
        ...state,
        blog: payload,
      };
    }
    case ACTIONS.getPatientAlert: {
      return {
        ...state,
        patientAlert: payload,
      };
    }
    case ACTIONS.getDoctorAlert: {
      return {
        ...state,
        doctorAlerts: payload,
      };
    }
    // Default Case
    case ACTIONS.getReviews: {
      return {
        ...state,
        reviews: payload,
      };
    }
    case ACTIONS.getReview: {
      return {
        ...state,
        review: payload,
      };
    }
    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;
