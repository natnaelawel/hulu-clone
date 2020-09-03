import React, { forwardRef, useEffect, useState } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import StarHalfOutlinedIcon from "@material-ui/icons/StarHalfOutlined";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const VideoCard = forwardRef(
  (
    {
      id,
      title,
      original_name,
      overview,
      poster_path,
      vote_average,
      release_date,
      backdrop_path,
    },
    ref
  ) => {
    const image =
      backdrop_path ||
      poster_path ||
      "/w600_and_h900_bestv2/TnOeov4w0sTtV2gqICqIxVi74V.jpg";
    const image_url = `https://image.tmdb.org/t/p/original${poster_path}`;
    return (
      <Link
        to={{
          pathname: `/movie/${id}`,
        }}
        ref={ref}
        className="video__card"
      >
        <img className="video__image" src={image_url} alt={title} />
        <TextTruncate
          className="movie__desc"
          line={1}
          element="p"
          truncateText="..."
          text={overview}
        />
        <Typography className="movie__title">{title || original_name}</Typography>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p className="movie__releaseDate">{release_date}</p>
          <p className="movie__rating">
            <StarHalfOutlinedIcon />
            {vote_average}/10
          </p>
        </div>
      </Link>
    );
  }
);

export default VideoCard;
