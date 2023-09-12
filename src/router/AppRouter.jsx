import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar'
import HomePage from '../pages/HomePage'
import DashboardPage from '../pages/DashboardPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import { PrivatRoute } from './PrivatRoute'


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='./' element={<Navbar />} />
                <Route index element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/dashboard' element={
                    <PrivatRoute>
                        <DashboardPage />
                    </PrivatRoute>
                } />
            </Routes>


        </>
    )
}

export default AppRouter