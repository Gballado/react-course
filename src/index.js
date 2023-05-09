import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import "./index.css";
import App from "./App";
import { FavouritesContextProvider } from "./store/favourites-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavouritesContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </FavouritesContextProvider>
);
