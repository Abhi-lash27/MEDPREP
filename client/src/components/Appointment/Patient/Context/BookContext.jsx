import React from "react";
import { createContext, useReducer } from "react";

export const context = createContext();

export const Appointmentreducer = (state, action) => {
  switch (action.type) {
    case "SET_APPOINTMENT":
      return {
        Appointment: action.payload,
      };
    case "CREATE_APPOINTMENT":
      return {
        Appointment: [action.payload, ...state.Appointment],
      };
    default:
      return state;
  }
};
export const BookContext = ({ children }) => {
  const [state, dispatch] = useReducer(Appointmentreducer, {
    Appointment: [],
  });
  return (
    <context.Provider value={{ ...state, dispatch }}>
      {children}
    </context.Provider>
  );
};
