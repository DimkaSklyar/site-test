import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";



import "./scss/app.scss";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { setPizzas } from "./redux/actions/pizzas";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => store.dispatch(setPizzas(data)));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/">
          <Home items={[]} />
        </Route>
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
