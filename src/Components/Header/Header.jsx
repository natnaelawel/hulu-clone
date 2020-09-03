import React, { useState, useEffect } from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTv";
import requests from "../../API/Request";
import {
  Paper,
  ListItem,
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import ReactSearchBox from "react-search-box";
import { fetchSearchedResult } from "../../API/API";
import { Link, useHistory } from "react-router-dom";

function Header({ setMovieType }) {
  const [searchResult, setSearchResult] = useState([]);
  const [searchQueryText, setSearchQueryText] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      searchQueryText !== ""
        ? setSearchResult(await fetchSearchedResult(searchQueryText))
        : setSearchResult([]);
    };
    fetchData();
  }, [searchQueryText]);

  const handleListItemClick = (id) => {
    history.push(`/movie/${id}`)
    setSearchQueryText('')
    setOpen(false)

  };
  const history = useHistory()
  const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleChange = (value) => {
    value === "" ? setOpen(false) : setOpen(true);
    setSearchQueryText(value);
  };

  const getImageLink = ({ backdrop_path, poster_path }) => {
    const image_url = `https://image.tmdb.org/t/p/original${poster_path}`;
    return image_url;
  };
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <HomeIcon />
          <Link to="/" style={{ textDecoration:'none', color: 'white' }}>
            <p className="">Home</p>
          </Link>
        </div>
        <div
          className="header__icon"
          onClick={() => setMovieType(requests.fetchTrending)}
        >
          <FlashOnIcon />
          <p className="">Trending</p>
        </div>
        <div className="header__icon">
          <LiveTvOutlinedIcon />
          <p className="">Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibraryIcon />
          <p className="">Collections</p>
        </div>
        <div className="header__icon">
          <PersonOutlinedIcon />
          <p className="">Account</p>
        </div>
      </div>

      <div className="header__right">
        <div className="search__field">
          <ReactSearchBox
            style={{ backgroundColor: "transparent" }}
            className="header__icon"
            placeholder="Search movie"
            data={searchResult}
            onSelect={(record) => console.log(record)}
            onFocus={() => {
              console.log("This function is called when is focussed");
            }}
            onChange={handleChange}
            fuseConfigs={{
              threshold: 0.05,
            }}
            value=""
          >
            <SearchIcon />
          </ReactSearchBox>
          {open && (
            <Paper className="search__result">
              <List>
                {searchResult.map((result) => (
                  <ListItem
                    button
                    onClick={() => handleListItemClick(result.id)}
                    key={result.id}
                  >
                    <ListItemAvatar>
                      <Avatar
                        variant="square"
                        src={getImageLink({
                          backdrop_path: result.backdrop_path,
                          poster_path: result.poster_path,
                        })}
                        className="avatar"
                      >
                        <PersonIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={result.title} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
        </div>
        <img
          src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png?fit=1280%2C680"
          alt="hulu logo"
          className="hulu__logo"
        />
      </div>
    </div>
  );
}

export default Header;
