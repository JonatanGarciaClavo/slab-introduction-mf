import React from "react";
import ReactDOM from "react-dom";
import { useJWT, useLoggedIn } from "./auth";

import "./index.scss";
import 'remixicon/fonts/remixicon.css'
import Login from "./Login";

const App = () => {
  const loggedIn = useLoggedIn();
  const token = useJWT();
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: auth</div>
      {loggedIn ? (
        <div>{token}</div>
      ): <Login />}
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
