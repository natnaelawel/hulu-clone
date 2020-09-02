
require('dotenv').config()


const API_KEY = process.env.REACT_APP_API_KEY;
// const API_KEY='7cccde866291b08ddf80dce6fa2b0f44';

export default {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated/api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomansMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchTvMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};