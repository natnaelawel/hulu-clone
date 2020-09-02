import React,{forwardRef} from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import StarHalfOutlinedIcon from "@material-ui/icons/StarHalfOutlined";

const VideoCard = forwardRef(({
  title,
  original_name,
  overview,
  poster_path,
  vote_average,
  release_date,
  backdrop_path,
},ref) => {
  const image = backdrop_path ||  poster_path || "https://image.tmdb.org/t/p/w600_and_h900_bestv2/TnOeov4w0sTtV2gqICqIxVi74V.jpg";
  const image_url = `https://image.tmdb.org/t/p/original${poster_path}`;
//   console.log("image url is ", image_url);
  return (
    <div ref={ref} className="video__card">
      <img className="video__image" src={image_url} alt={title} />
      <TextTruncate
        className="movie__desc"
        line={1}
        element="p"
        truncateText="..."
        text={overview}
      />
      <h2 className="movie__title">{title || original_name}</h2>
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
    </div>
  );
})

export default VideoCard;
