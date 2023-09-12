import React from 'react'
import Navbar from '../Navbar'
import es from '../imges/es.jpg';


const HomePage = () => {

    const texto = 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid'
    return (
        <>
            <Navbar />
            <div className='tests'>
                <h1>Home Page</h1>
                <p>This is the home page... {texto}</p>
                <div className='imes'><img src={es} /></div>


            </div>
        </>
    )


}

export default HomePage