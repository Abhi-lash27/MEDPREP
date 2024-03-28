import React from "react";
import { useContext } from "react";
import { context } from "../Context/BookContext";
export const useBookContext = () => {
  const con = useContext(context);
  if (!con) {
    throw Error("Connot read the context");
  }
  return con;
};
