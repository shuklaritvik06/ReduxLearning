import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import MovieDetails from './components/Movie Details/MovieDetails';
import Home from './components/Home/Home';
import PageNotFound from './components/Page Not Found/PageNotFound';
import Footer from './components/Footer/Footer';
import "./App.scss";

export default function App(){
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}