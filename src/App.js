import React from "react";
import "./App.css";
// import Header from "./Components/Header/Header";
// import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
// import Results from "./Components/Result/Results";
// import request from "./API/Request";
// import Filter from "./Components/Filter/Filter";
// import { Button } from "@material-ui/core";
// import FilterListIcon from "@material-ui/icons/FilterList";
// import FlipMove from "react-flip-move";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import Home from "./Components/Home/Home";


function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Router>
          <Switch>
            <Route exact path="/" component={withRouter(Home)} />
            <Route
              path="/movie/:id"
              forceRefresh={true}
              component={withRouter(MovieDetail)}
            />
          </Switch>
        </Router>
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
