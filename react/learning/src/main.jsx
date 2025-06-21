import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Navbar from "./component/Navbar";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <App />
  </StrictMode>
);
