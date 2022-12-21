import { useContext } from "react";
import { NavContext } from "../context/NavContext";

export const useNavContext = () => {
  // get the context
  const context = useContext(NavContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useNavContext was used outside of its Provider");
  }

  return context;
};
