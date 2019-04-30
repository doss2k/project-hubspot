import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Companies from "../containers/Companies";
import Deals from "../containers/Deals";
import NewCompany from "../containers/CreateCompanyForm"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        <Route exact path="/dashboard" render={() => <Dashboard />} />
        <Route exact path="/companies" render={() => <Companies />} />
        <Route exact path="/deals" render={() => <Deals />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;