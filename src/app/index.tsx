import React from "react";
import ReactDOM from "react-dom/client";
import MainRoutes from "./MainRoutes";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <MainRoutes />
    </React.StrictMode>
  );
}
