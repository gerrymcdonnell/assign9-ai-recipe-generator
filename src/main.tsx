import React from "react";
import ReactDOM from "react-dom/client";

import App from "./pages/App";
import App2 from "./pages/App2";
import Home from "./pages/Home";

import "./index.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { BrowserRouter } from "react-router-dom"; 

ReactDOM.createRoot(document.getElementById("root")!).render(

<React.StrictMode>
  <BrowserRouter>
    <Authenticator>
      <Home />
    </Authenticator>
  </BrowserRouter>
</React.StrictMode>

);