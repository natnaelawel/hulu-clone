import React, { useRef, useState } from "react";
import "./SingleMovie.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import VisibilityIcon from "@material-ui/icons/Visibility";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Trailor from "../Trailor/Trailor";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 80);

function SingleMovie({
  movie: {
    id,
    backdrop_path,
    poster_path,
    title,
    tagline,
    genres,
    release_date,
    homepage,
    overview,
    original_language,
    vote_average,
    vote_count,
    popularity,
    videos,
    production_countries,
  },
}) {
  const image =
    backdrop_path ||
    poster_path ||
    "/w600_and_h900_bestv2/TnOeov4w0sTtV2gqICqIxVi74V.jpg";
  const image_url = `https://image.tmdb.org/t/p/original${image}`;
  console.log("homepage is ", homepage);

  const myRef = useRef(null);
  const [showTrailor, setShowTrailor] = useState(false);
  // console.log('country ',)

  const handleShowTrailor = async () => {
    await setShowTrailor((prev) => !prev);
    scrollToRef(myRef);
  };
  return (
    <div className="movie__detail">
      <div className="movie__description">
        <div className="movie__background">
          <img src={image_url} alt="background" />
        </div>
        <div className="movie__info">
          <div className="info__icon">
            <p>
              <FavoriteIcon /> <span> Favorite</span>
            </p>
            <p>
              <VisibilityIcon /> <span> {vote_count} views</span>
            </p>
            <p>
              <WatchLaterIcon />
              <span> Watch Later</span>
            </p>
            <p className="watch__trailor__button" onClick={handleShowTrailor}>
              <PlayCircleFilledWhiteIcon />
              <span>Watch Trailor</span>
            </p>
          </div>
          <Typography className="movie__title" variant="h1">
            {title}
          </Typography>
          <Typography className="movie__overview" variant="subtitle1">
            {overview}
          </Typography>
          <div className="movie__description__detail">
            <div>
              <p>
                Genre: <span>Horror</span>
              </p>

              <p>
                Actor: <span>Carolina, Munro, Jane Merrows</span>
              </p>
            </div>
            <div>
              <p>
                Director: <span>Andre Jaws</span>
              </p>
              <p>
                Country:
                <span className="country__text">
                  {" "}
                  {production_countries ? production_countries[0].name : "null"}
                </span>
              </p>
            </div>
            <div>
              <p>
                Duration: <span>81min</span>
              </p>
              <p>
                Release: <span>{release_date}</span>{" "}
              </p>
            </div>
            <div>
              <p>
                Imdb: <span>{vote_average}</span>{" "}
              </p>
              <p>
                Popularity: <span>{popularity}</span>{" "}
              </p>
            </div>

            {/* <p> */}
            <div className="movie__genres">
              <p>genres:</p>
              {genres?.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
                // {genre.name}{" "}
              ))}
            </div>
          </div>
        </div>
        <div className="movie__preview">
          <div className="movie__preview__content" onClick={handleShowTrailor}>
            <div className="movie__preview__image">
              <img
                width="100px"
                height="100px"
                src="https://cdn.pixabay.com/photo/2013/07/13/11/42/audio-158489_960_720.png"
                alt="play_button"
              />
            </div>
            <Typography variant="h4">Watch Trailor</Typography>
          </div>
        </div>
      </div>
      {showTrailor && (
        <div ref={myRef} v-if={showTrailor}>
          <Trailor id="trailor" url={videos} />
        </div>
      )}
      {/* </div> */}
    </div>
  );
}

export default SingleMovie;

/**
 * 
 * 
 *  <div class="loader"></div>
        <a
          class="movie__preview__image"
          href="https://yesmovies.ag/movie/the-haunting-of-margam-castle-101362/watching.html"
          title="Click to play"
        >
          <i class="fa fa-play"></i>
          // {<img }
          {/* src="https://cdn.pixabay.com/photo/2013/07/13/11/42/audio-158489_960_720.png" }
          // {/* alt="play_button" }
          // {/* /> }
        // </a>
//  */
