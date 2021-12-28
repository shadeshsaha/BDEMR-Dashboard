
import "bootstrap/dist/css/bootstrap.css";
import AdminLayout from "layouts/Admin.js";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./assets/demo/demo.css";
import "./assets/scss/paper-dashboard.scss";
  


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);


