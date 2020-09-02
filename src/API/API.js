import requests from "./Request";
import axios from './Axios'


export const fetchTrendings = async ()=>{
    const {data} = await axios.get(requests.fetchTrending);
    return data
}

export const fetchMovies = async (selectedType) => {
    const {data} = await axios.get(selectedType)
    return data
    // let data = {}
    // switch (selectedType) {
    //   case "trending":
    //     data = await axios.get(requests.fetchTrending);
    //     break;
    //   case "popular":
    //     data = await axios.get(requests.fetchPopular);
    //     break;
    //   case "now_playing":
    //     data = await axios.get(requests.fetchNowPlaying);
    //     break;
    //   case "top_rated":
    //     data = await axios.get(requests.fetchTopRated);
    //     break;
    //   case "comedy":
    //     data = await axios.get(requests.fetchComedyMovies);
    //     break;
    //   case "horror":
    //     data = await axios.get(requests.fetchHorrorMovies);
    //     break;
    //   case "romans":
    //     data = await axios.get(requests.fetchRomansMovies);
    //     break;
    //   case "mystery":
    //     data = await axios.get(requests.fetchMysteryMovies);
    //     break;
    //   case "action":
    //     data = await axios.get(requests.fetchActionMovies);
    //     break;
    //   case "western":
    //     data = await axios.get(requests.fetchWesternMovies);
    //     break;
    //   case "animation":
    //     data = await axios.get(requests.fetchAnimationMovies);
    //     break;
    //   case "tv":
    //     data = await axios.get(requests.tv);
    //     break;

    //   default:
    //     data = await axios.get(requests.fetchTrending);
    //     break;
    // }
    // return data.data;
}