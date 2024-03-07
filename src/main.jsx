import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { AssessmentContextProvider } from "./context/index.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AssessmentContextProvider>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </AssessmentContextProvider>
  </React.StrictMode>
);
