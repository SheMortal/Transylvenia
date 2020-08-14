import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Contact from "./components/contact";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/rooms" component={Rooms}></Route>
        <Route
          exact
          path="/rooms/:slug"
          component={SingleRoom}
        ></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/error/" component={Error}></Route>
      </Switch>
    </div>
  );
}

export default App;
