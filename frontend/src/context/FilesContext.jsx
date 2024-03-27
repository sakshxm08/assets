import { createContext, useEffect, useReducer } from "react";
import { FilesReducer } from "../reducers/FilesReducer";
import axios from "axios";
import PropTypes from "prop-types";
export const FilesContext = createContext();

export const FilesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilesReducer, { files: [] });
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/images");
        dispatch({ type: "FETCH", payload: response.data });
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);
  return (
    <FilesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FilesContext.Provider>
  );
};

FilesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
