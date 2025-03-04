import React from "react"; // Import React for JSX
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "./App.css";
import App from "./App.jsx";

// Create a root and render the app
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);