import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <header>
        <Link to="/"><h1>Logo</h1></Link>

        <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>
       </header>

       <div className='user'>
        <span className='username'>Diego</span>
        <button className='btn-logout'>LogOut</button>
       </div>

    <Outlet/>
    
    
    
    </>
  )
}

export default Navbar