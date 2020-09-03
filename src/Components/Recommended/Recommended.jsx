import React,{useState, useEffect} from 'react'
import './Recommended.css'
import VideoCard from '../VideoCard/VideoCard'
import { fetchRecommendedMovies } from "../../API/API";
import FlipMove from "react-flip-move";

import { Typography } from "@material-ui/core";


function Recommended({movieId}) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const movies = await fetchRecommendedMovies(movieId);
        setMovies(movies.results);
      };
      fetchData();
    }, [movieId]);
    return (
      <div className="recommended">
        <Typography variant="h3">Most Recomended</Typography>
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
                id={id}
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

export default Recommended;
