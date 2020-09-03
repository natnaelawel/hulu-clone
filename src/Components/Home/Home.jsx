import React, { useState } from "react";
import { Button } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import FlipMove from "react-flip-move";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Filter from "../Filter/Filter";
import Results from "../Result/Results";
import request from "../../API/Request";
import "./Home.css";

function Home() {
  const [movieType, setMovieType] = useState(request.fetchTrending);
  const [filterToggle, setFilterToggle] = useState(false);

  return (
    <div className="home__app">
      <div className="top">
        <Header setMovieType={setMovieType} />
        <Nav setMovieType={setMovieType} />
      </div>
      <div className="middle" >
        <FlipMove>
          <div
            className="filter__toggle__button"
            onClick={() => setFilterToggle((prev) => !prev)}
          >
            <Button startIcon={<FilterListIcon />}>Filter Movies</Button>
          </div>
          <Filter showFilter={filterToggle} />
        </FlipMove>
        <Results className="results" selectedType={movieType} />
      </div>
    </div>
  );
}

export default Home;
