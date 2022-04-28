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
  couponBtn: false,
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
    case ACTIONS.setDashboard: {
      return {
        ...state,
        dashboard: payload,
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
    case ACTIONS.getPatient: {
      return {
        ...state,
        patient: payload,
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
        ...state,
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
    case ACTIONS.setBlogButton: {
      return {
        ...state,
        button: payload,
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
    case ACTIONS.getContacts: {
      return {
        ...state,
        contacts: payload,
      };
    }
    case ACTIONS.getContact: {
      return {
        ...state,
        contact: payload,
      };
    }
    case ACTIONS.getCoupons: {
      return {
        ...state,
        coupons: payload,
      };
    }
    case ACTIONS.getCoupon: {
      return {
        ...state,
        coupon: payload,
      };
    }
    case ACTIONS.getCouponBtn: {
      console.log(payload);
      return {
        ...state,
        couponBtn: payload,
      };
    }
    case ACTIONS.getPayouts: {
      console.log(payload);
      return {
        ...state,
        payouts: payload,
      };
    }
    case ACTIONS.setPayout: {
      console.log(payload);
      return {
        ...state,
        payout: payload,
      };
    }
    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;
