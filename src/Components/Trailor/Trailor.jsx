import React from 'react'
import ReactPlayer from "react-player";
import './Trailer.css'

// 0: {id: "5ef4bfeb81a7fc0034bdacc3", iso_639_1: "en", iso_3166_1: "US", key: "ozUuAcGOhPs", name: "Ava | Official Trailer (HD) | Vertical Entertainment", …}
function Trailor({url}) {
  // .videos.results[0]
//   console.log("movie in trailor", url?.results[0].key);
  let video_link = `https://www.youtube.com/watch?v=${url?.results[0]?.key}`;
  return (
    <div className="trailor">
      <ReactPlayer className="react__player" playing="true" controls="true" wrapper="div" url={video_link} />
    </div>
  );
}

export default Trailor
