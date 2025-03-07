import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../features/auth/pages/LoginPage';
import RegisterPage from '../features/auth/pages/RegisterPage';
import HomePage from "../features/questions/pages/HomePage";

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<Navigate to="/login" replace />} />


                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
