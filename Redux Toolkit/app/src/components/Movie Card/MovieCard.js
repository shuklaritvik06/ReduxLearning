import React from 'react'
import { Link } from 'react-router-dom';
import "./MovieCard.scss";

export default function MovieCard(props) {
  const  { movie } = props;
  return (
    <div className='card-item'>
      <Link to={`/movie/${movie.imdbID}`}>
      <div className='card-inner'>
      <div className='card-top'>
            <img src={movie.Poster} alt={movie.Title} />
        </div>
      <div className='card-bottom'>
         <div className='card-info'>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
         </div>
      </div>  
      </div>
      </Link>
    </div>
  )
}
