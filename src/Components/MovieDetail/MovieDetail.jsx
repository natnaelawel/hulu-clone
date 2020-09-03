import React, { useState, useEffect } from "react";
import "./MovieDetail.css";
import Header from "../Header/Header";
// import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import request from "../../API/Request";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";
import SingleMovie from "../ShowSingleMovie/SingleMovie";
import Recommended from "../Recommended/Recommended";
import { fetchSingleMovieById } from "../../API/API";

function MovieDetail() {
  let { id } = useParams();

  console.log("movie is ", id);
  const [movieType, setMovieType] = useState(request.fetchTrending);
  const [filterToggle, setFilterToggle] = useState(false);
  const [movie, setMovie] = useState({});


  const image =
    movie.backdrop_path ||
    movie.poster_path ||
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/TnOeov4w0sTtV2gqICqIxVi74V.jpg";
  const image_url = `https://image.tmdb.org/t/p/original${image}`;
  console.log('movie is ', movie)

  useEffect(() => {
    const fetchData = async () => {
      setMovie(await fetchSingleMovieById(id));
    };
    fetchData();
  }, [id]);

  return (
    <div className="movie__detail">
      <Header setMovieType={setMovieType} />
      {/* <Nav setMovieType={setMovieType} /> */}

      <SingleMovie movie={movie} />
      <Recommended movieId={movie.id} />
    </div>
  );
}

export default MovieDetail;
