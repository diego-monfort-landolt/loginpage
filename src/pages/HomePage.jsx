import React, { useReducer } from 'react'
import Navbar from '../Navbar'
import es from '../imges/es.jpg';
const currentTime = new Date();
const month = currentTime.getMonth();
const year = currentTime.getFullYear();
const messes = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviemb', 'diciembre'];
const valorInicial = { m: month, a: year }
const reducer = (state, action) => {
    let newMonth = state.m;
    let newYear = state.a;
    switch (action.type) {

        case 'masM':
            newMonth = newMonth == 11 ? 0 : newMonth + 1;
            break;
        case 'menosM':
            newMonth = newMonth == 0 ? 11 : newMonth - 1;
            break;
        case 'masA':
            newYear = newYear + 1;
            break;
        case 'menosA':
            newYear = newYear - 1;
            break;
    }
    return { m: newMonth, a: newYear }

}


const HomePage = () => {

    const texto = 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid'

    const [fecha, dispatch] = useReducer(reducer, valorInicial)
    return (
        <>
            <Navbar />
            <div className='tests'>
                <h1>Home Page</h1>
                <p>This is the home page... {texto}</p>
                <div className='imes'><img src={es} /></div>
            </div>
            <div className='calendario-container'>
                {messes[fecha.m]} ({fecha.a})

                <div className='btnsection'>
                    <p>Messes:</p><button onClick={() => dispatch({ type: 'masM' })} >+</button>
                    <button onClick={() => dispatch({ type: 'menosM' })} >-</button>
                </div>
                <div className='btnsection'>
                    <p>Años:</p><button onClick={() => dispatch({ type: 'masA' })} >+</button>
                    <button onClick={() => dispatch({ type: 'menosA' })} >-</button>
                </div>
            </div>


        </>
    )


}

export default HomePage