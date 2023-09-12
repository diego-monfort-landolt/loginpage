import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import nod from './imges/node.png';

const Navbar = () => {

  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);

  const onLogout = () => {
    navigate('/login', { replace: true });
   };

  return (
    <>


      <header>
        <Link to="/"><img className='logoimg' src={nod} /></Link>

        {
          state?.logged ? (
            <div className='user'>
              <span className='username'>{ state?.name }</span>
              <button className='btn-logout' onClick={onLogout}>LogOut</button>
            </div>
          ) : (
            <nav>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </nav>
        )}
 
      </header>

<Outlet />




     



    </>
  )
}

export default Navbar