import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Login from '../pages/Login';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
};

export default AppRouter;