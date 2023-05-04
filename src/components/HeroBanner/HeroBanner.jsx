import "../HeroBanner/HeroBanner.css";
import React from 'react';

function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-banner__overlay"></div>
      <div className="hero-banner__content">
        <h1 className="hero-banner__title">Welcome to My Movie App</h1>
        <p className="hero-banner__subtitle">Find your favorite movies and TV shows</p>
        <form className="hero-banner__search-form">
          <input type="text" placeholder="Search movies..." />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default HeroBanner;