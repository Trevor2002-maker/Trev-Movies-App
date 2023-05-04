import "../HeroBanner/HeroBanner.css";
import React from 'react';
import ContentWrapper from "../ContentWrapper/ContentWrapper";

function HeroBanner({ handleSearch }) {

  return (
    <div className="hero-banner">
      <div className="hero-banner__overlay"></div>
      <ContentWrapper>
      <div className="hero-banner__content">
        <h1 className="hero-banner__title">Welcome to My Movie App</h1>
        <p className="hero-banner__subtitle">Find your favorite movies and TV shows</p>
        <form className="hero-banner__search-form">
          <input type="text" placeholder="Search movies..." onChange={handleSearch}/>
          <button type="submit">Search</button>
        </form>
      </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBanner;