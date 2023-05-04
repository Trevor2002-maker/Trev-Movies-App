import "../HeroBanner/HeroBanner.css";
import React, {useState} from 'react';
import ContentWrapper from "../ContentWrapper/ContentWrapper";

function HeroBanner({onSearch}) {
    const [searchText, setSearchText] = useState('');

    const handleSearch= (event) =>{
        onSearch(searchText)
    }
  return (
    <div className="hero-banner">
      <div className="hero-banner__overlay"></div>
      <ContentWrapper>
      <div className="hero-banner__content">
        <h1 className="hero-banner__title">Welcome to My Movie App</h1>
        <p className="hero-banner__subtitle">Find your favorite movies and TV shows</p>
        <form className="hero-banner__search-form" onSubmit={handleSearch}>
          <input type="text" placeholder="Search movies..."  value={searchText} onChange={(event)=> setSearchText(event.target.value)}/>
          <button type="submit">Search</button>
        </form>
      </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBanner;