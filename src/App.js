import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardPage from "./components/DashboardPage";
import ProductsPage from "./components/ProductsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <DashboardPage />
          </Route>
          <Route exact path="/products">
            <ProductsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
