import React from 'react';
import {Route, Link, Routes, Navigate} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Login from '../pages/Login';
import Register from "../pages/Register.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    );
};

export default AppRouter;