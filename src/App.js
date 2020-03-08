import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
