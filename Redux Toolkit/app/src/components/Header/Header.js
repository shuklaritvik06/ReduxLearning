import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import user from "../images/user.png";
import "./Header.scss";
import { fetchAsyncMovies,fetchAsyncShows } from '../../redux/movies/movieSlice';
import { useDispatch } from 'react-redux';

export default function Header() {
  const dispatch = useDispatch();
  const [term,setTerm] = useState("");
  const submitHandler = (e)=>{
    e.preventDefault();
    if (term === "") return alert("Please enter search term!");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  }
  return (
    <div className='header'>
      <div className='logo'><Link to="/">Movie App</Link></div>
      <div className='search-bar'>
          <form onSubmit={submitHandler}>
            <input type='text' className='form-input' placeholder='Search Movies or Shows' onChange={(e)=>setTerm(e.target.value)}/>
            <button type='submit' className='form-button'><i className='fa fa-search'></i></button>
          </form>
        </div>
      <div className='user-image'>
        <img src={user} alt='user' />
      </div>
    </div>
  )
}
