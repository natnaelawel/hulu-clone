import React, { useState } from 'react'
import './Header.css'
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTv";
import requests from '../../API/Request'

function Header({ setMovieType }) {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <HomeIcon />
          <p className="">Home</p>
        </div>
        <div className="header__icon" onClick={() => setMovieType(requests.fetchTrending)}>
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
          <SearchIcon />
          <p className="">Search</p>
        </div>
        <div className="header__icon">
          <PersonOutlinedIcon />
          <p className="">Account</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png?fit=1280%2C680"
        alt="hulu logo"
        className="hulu__logo"
      />
    </div>
  );
}

export default Header
