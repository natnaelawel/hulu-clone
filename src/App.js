import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Results from "./Components/Result/Results";
import request from './API/Request'

function App() {
  const [movieType, setMovieType] = useState(request.fetchTrending);

  return (
    <div className="app">
      <div className="top">
        <Header setMovieType={setMovieType} />
        <Nav setMovieType={setMovieType} />
      </div>
      <div className="middle">
        <Results className="body" selectedType={movieType} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
