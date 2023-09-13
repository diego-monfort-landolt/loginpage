import React, { useReducer } from 'react'
const types = {
    masM: 'masM',
    menosM: 'menosM',
    masA: 'masA',
    menosA: 'menosA',
}
import Navbar from '../Navbar'
import Comprar from './Comprar'
const currentTime = new Date();
const month = currentTime.getMonth();
const year = currentTime.getFullYear();
const messes = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviemb', 'diciembre'];
const valorInicial = { m: month, a: year }
const reducer = (state, action) => {
    let newMonth = state.m;
    let newYear = state.a;
    switch (action.type) {

        case types.masM:
            newMonth = newMonth == 11 ? 0 : newMonth + 1;
            break;
        case types.menosM:
            newMonth = newMonth == 0 ? 11 : newMonth - 1;
            break;
        case types.masA:
            newYear = newYear + 1;
            break;
        case types.menosA:
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

            </div>
            <div className='calendario-container'>
                <div className='date-container'
                    style={(fecha.m < month && fecha.a <= year || fecha.a < year) ? { color: "red" } : { color: 'green' }}>
                    {messes[fecha.m]} ({fecha.a})
                </div>


                <div className='btnsection'>
                    <p>Messes:</p><button onClick={() => dispatch({ type: types.masM })} >+</button>
                    <button onClick={() => dispatch({ type: types.menosM })} >-</button>
                </div>
                <div className='btnsection'>
                    <p>Años:</p><button onClick={() => dispatch({ type: types.masA })} >+</button>
                    <button onClick={() => dispatch({ type: types.menosA })} >-</button>
                </div>
            </div>

            <Comprar />


        </>
    )


}

export default HomePage