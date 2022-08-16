import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouteComponent from './components/Routes';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';

export default function App(){
    return (
        <BrowserRouter>
        <div>
            <Header />
            <RouteComponent />
            <Footer />
        </div>
        </BrowserRouter>
    );
}