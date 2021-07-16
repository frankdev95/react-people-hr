import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import React, { Fragment } from "react";
import "./App.css";
import Auth from "./components/authentication/Auth";
import Main from "./components/main/Main";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return <Fragment>{!isAuth ? <Auth /> : <Main />}</Fragment>;
}

export default App;
