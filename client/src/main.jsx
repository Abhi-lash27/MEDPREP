import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BookContext } from "./components/Appointment/Patient/Context/BookContext.jsx";
import "./Lngctrl.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <BookContext>
      <App />
    </BookContext>
  </>,
);
