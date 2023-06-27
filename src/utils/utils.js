import React from 'react';
import StarIcon from '@mui/icons-material/Star';

export function htmlConverter(text){
  return { __html: text };
}

export function printStars(rank){
  const stars = [];
  for (let i = 1; i <= rank; i++) {
    stars.push(<StarIcon className="yellow-star" key={i} />)
  }
  return stars
}

