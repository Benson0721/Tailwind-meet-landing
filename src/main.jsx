import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/generated-tailwind.css";
import "./assets/scss/index.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
