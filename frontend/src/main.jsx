import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FilesContextProvider } from "./context/FilesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilesContextProvider>
      <App />
    </FilesContextProvider>
  </React.StrictMode>
);
