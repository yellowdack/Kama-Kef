import React, {useState, useEffect} from "react";
import Logo from "../images/logo.png";
//import ButtonsHome from "./ButtonsHome";
import Entry from "./Entry";

import functionHomePage from "../functionHomePage"
import {BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
//Pages
import MainPage from "../pages/MainPage"
import NotFoundPage from "../pages/404"

function App() {
  const [initialData, setInitialData] = useState([{}])

  useEffect(()=> {
    fetch('/tableToo').then(
      response => response.json()
    ).then(data => console.log(data))
  }, []);
  return (
    <div>
      <img src={Logo} className="Logo" />
      <Router>
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/tableToo" component={MainPage} />
        <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
