import React from "react";
import "./Results.css";
import VideoCard from "../VideoCard/VideoCard";
import { useEffect } from "react";
import { fetchMovies } from "../../API/API";
import { useState } from "react";
import FlipMove from "react-flip-move";
function Results({ selectedType }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetchMovies(selectedType);
      console.log("trendings are ", movies);
      setMovies(movies.results);
    };
    fetchData();
  }, [selectedType]);
  
  return (
    <div className="results">
      <FlipMove>
        {movies.map(
          ({
            id,
            title,
            overview,
            poster_path,
            release_date,
            vote_average,
            backdrop_path,
            original_name,
          }) => (
            <VideoCard
              title={title}
              overview={overview}
              poster_path={poster_path}
              key={id}
              release_date={release_date}
              vote_average={vote_average}
              backdrop_path={backdrop_path}
              original_name={original_name}
            />
          )
        )}
      </FlipMove>
    </div>
  );
}

export default Results;
