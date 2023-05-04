import React from 'react';
import "./App.css";
function RatingStars({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const starClass = i <= rating ? 'star filled' : 'star';

    stars.push(
      <span key={i} className={starClass}>
        ★
      </span>
    );
  }

  return <div className="RatingStars">{stars}</div>;
}

export default RatingStars;