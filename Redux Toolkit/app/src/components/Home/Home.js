import React, { useEffect } from 'react'
import MovieListing from '../Movie Listing/MovieListing'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies,fetchAsyncShows } from '../../redux/movies/movieSlice';

export default function Home() {
  const search = "Harry";
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAsyncMovies(search));
    dispatch(fetchAsyncShows(search));
  },[dispatch]);
  return (
    <div>
          <div className='banner-img'></div>
          <MovieListing />
    </div>
  )
}
