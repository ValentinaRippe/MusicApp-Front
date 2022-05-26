import React from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { Details } from '../views/details/Details';
import { Home } from '../views/home/Home';
import ScrollToTop from '../utils/ScrollToTop';
import { Genres } from '../views/genres/Genres';

export function RoutesApp() {
    return (
        <Router>
            <ScrollToTop>
            <Header/>
            <Routes>
                <Route path='/details/:id' exact element={<Details/>}/>
                <Route path='/genres' element={<Genres/>}/>
                <Route path="/" exact element={<Home/>}/>
                <Route path='*' element={<Navigate replace to='/' />} />
            </Routes>
            <Footer/>
            </ScrollToTop>
        </Router>
    )
}

