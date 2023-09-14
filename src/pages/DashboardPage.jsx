import React, { useState } from 'react'
import Navbar from '../Navbar'
import '../stylesheet/dashboard.css'
import foto from '../imges/bg1.jpg'
import { AiFillHeart, AiFillFrown } from "react-icons/ai";

const DashboardPage = () => {
  const h2 = <h2><span className='spanS'>W</span>elcome</h2>;
  const [texto, setTexto] = useState(true)
  const cambio = () => {
    setTexto(!texto)
  }


  return (
    <>
      <Navbar />

      <div className='dashboardContainer'>
        <div className='dashboardtitleContainer'>

          <p>{h2} to the dashboard!</p>
          <div className='cardContainer'>
            <div className='card'>
              <div className='card-body'>
                <h3 className='card-title'>DashBoard Card</h3>
                <img src={foto} className='card-img-top' alt='Card image cap' />
                <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>

            <div className='cardContainer'>
              <div className='card'>
                <div className='card-body'>
                  <h3 className='card-title'>DashBoard Card</h3>
                  <img src={foto} className='card-img-top' alt='Card image cap' />
                  <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='btn-group'>
          <h3>{texto ? <AiFillHeart /> : <AiFillFrown />}</h3>
          <button onClick={cambio}>Click!</button>
        </div>

      </div>

    </>


  )

}

export default DashboardPage