import React, { useState } from "react";
import style from "./App.module.css";
import HelloWorld from "./components/HelloWorld.jsx";
import Counter from "./components/Counter.jsx";
import Default from "./components/Defaulte.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { hashHistory } from "react-router";
import logo from "../static/pig.svg";
//root Componet
export default function App() {
  return (
    <Router history={hashHistory}>
      <div className={style.container}>
        <img className={style.logo} src={logo} alt="logo" />
        <ul className={style.nav}>
          <button className={style.navbtn}>
            <Link className={style.navItem} to="/helloworld">
              Helloworld
            </Link>
          </button>
          <button className={style.navbtn}>
            <Link className={style.navItem} to="/counter">
              Counter
            </Link>
          </button>
        </ul>
        <div className={style.route}>
          <Route exact path="/" component={Default} />
          <Route path="/counter" component={Counter} />
          <Route path="/helloworld" component={HelloWorld} />
        </div>
      </div>
    </Router>
  );
}
