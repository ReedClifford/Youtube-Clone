import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ToggleContextsProvider } from "./context/toggleContexts";
import { YoutubeDataContextProvider } from "./context/youtubeDataContext";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ToggleContextsProvider>
      <YoutubeDataContextProvider>
        <App />
      </YoutubeDataContextProvider>
    </ToggleContextsProvider>
  </BrowserRouter>
);
