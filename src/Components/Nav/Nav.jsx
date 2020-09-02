import React from 'react'
import './Nav.css'
import requests from '../../API/Request'
function Nav({setMovieType}) {
    return (
      <div className="nav">
        <h2>Lineup</h2>
        <h2 onClick={() => setMovieType(requests.fetchNowPlaying)}>Keep&nbsp;Watching</h2>
        <h2 onClick={() => setMovieType(requests.fetchNowPlaying)}>My&nbsp;Channels</h2>
        <h2 onClick={() => setMovieType(requests.fetchTvMovies)}>TV</h2>
        <h2 onClick={() => setMovieType(requests.fetchPopular)}>Popular</h2>
        <h2 onClick={() => setMovieType(requests.fetchUpcoming)}>Upcoming</h2>
        <h2 onClick={() => setMovieType(requests.fetchTopRated)}>Top&nbsp;Rated</h2>
        <h2 onClick={() => setMovieType(requests.fetchNowPlaying)}>New&nbsp;Movies</h2>
        <h2 onClick={() => setMovieType(requests.fetchNowPlaying)}>Trending</h2>
        <h2 onClick={() => setMovieType(requests.fetchActionMovies)}>Actions</h2>
        <h2 onClick={() => setMovieType(requests.fetchHorrorMovies)}>Horror</h2>
        <h2 onClick={() => setMovieType(requests.fetchComedyMovies)}>Comedy</h2>
        <h2 onClick={() => setMovieType(requests.fetchRomansMovies)}>Romance</h2>
        <h2 onClick={() => setMovieType(requests.fetchMysteryMovies)}>Mystery</h2>
        <h2 onClick={() => setMovieType(requests.fetchSciFiMovies)}>Sci&nbsp;fi</h2>
        <h2 onClick={() => setMovieType(requests.fetchWesternMovies)}>Western</h2>
        <h2 onClick={() => setMovieType(requests.fetchAnimationMovies)}>Animation</h2>
        <h2 onClick={() => setMovieType(requests.fetchComedyMovies)}>Kids</h2>
        <h2 onClick={() => setMovieType(requests.fetchNowPlaying)}>News</h2>
        <h2 onClick={() => setMovieType(requests.fetchNowPlaying)}>Sports</h2>
      </div>
    );
}

export default Nav
