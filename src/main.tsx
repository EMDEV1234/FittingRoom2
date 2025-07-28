import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Add error handling to catch any issues
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element not found!");
  document.body.innerHTML = '<div style="padding: 20px; font-family: Arial;"><h1>Error: Root element not found</h1><p>The application could not start. Please check the console for more details.</p></div>';
} else {
  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Failed to render app:", error);
    rootElement.innerHTML = '<div style="padding: 20px; font-family: Arial;"><h1>Application Error</h1><p>The application failed to load. Check console for details.</p></div>';
  }
}
