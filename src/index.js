import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";

if (!localStorage.getItem("tasks"))
  localStorage.setItem("tasks", JSON.stringify([]));

ReactDOM.render(
  <Router>
    <ChakraProvider>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/test"></Route>
    </ChakraProvider>
  </Router>,
  document.getElementById("root")
);
