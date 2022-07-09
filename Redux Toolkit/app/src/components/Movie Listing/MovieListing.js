import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies,getAllShows} from '../../redux/movies/movieSlice'
import MovieCard from '../Movie Card/MovieCard';
import Slider from "react-slick";
import { Settings } from './settings';
import "./MovieListing.scss";

export default function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const movieRender = movies.Response ? (
    movies.Search.map((movie) => {
      return <MovieCard key={movie.imdbID} movie={movie} />
    })
  ) : (
    <div>Error</div>
  )
  const showRender = shows.Response ? (
    shows.Search.map((movie) => {
      return <MovieCard key={movie.imdbID} movie={movie} />
    })
  ) : (
    <div>Error</div>
  )
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'><Slider {...Settings}>{movieRender}</Slider></div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...Settings}>{showRender}</Slider>
        </div>
      </div>
    </div>
  );
}
