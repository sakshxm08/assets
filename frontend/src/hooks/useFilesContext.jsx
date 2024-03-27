import { useContext } from "react";
import { FilesContext } from "../context/FilesContext";

export const useFilesContext = () => {
  const context = useContext(FilesContext);
  if (!context)
    throw Error(
      "useFilesContext must be wrapped inside an FilesContextProvider"
    );
  return context;
};
