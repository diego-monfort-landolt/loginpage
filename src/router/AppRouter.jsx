import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar'
import HomePage from '../pages/HomePage'
import DashboardPage from '../pages/DashboardPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'


const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path='/' element={<Navbar />} />
                <Route index element={<HomePage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='register' element={<RegisterPage />} />
                <Route path='dashboard' element={<DashboardPage />} />

            </Routes>


        </>
    )
}

export default AppRouter