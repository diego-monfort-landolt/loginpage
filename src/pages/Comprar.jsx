import React, { useState, useReducer, useRef } from 'react'
const types = {
    menos: 'menos',
    mas: 'mas',
    eliminar: 'eliminar',
    compror: 'compror',
}

const valorInicial = []
const reducer = (state, action) => {
    switch (action.type) {
        case types.menos:
            return state.map(cosa =>
                (action.payload === cosa.id && cosa.cantidad > 1)
                    ? { ...cosa, cantidad: cosa.cantidad - 1 }
                    : cosa)
        case types.mas:
            return state.map(cosa =>
                (action.payload === cosa.id)
                    ? { ...cosa, cantidad: cosa.cantidad + 1 }
                    : cosa)
        case types.eliminar:
            return (state.filter(valor => valor.id !== action.payload))
        case types.compror:
            return [...state, action.payload]
            default:
                return state;
        

    }
    return state;
}

const Comprar = () => {
    const inputName = useRef('')
    const [lista, dispatch] = useReducer(reducer, valorInicial)
    const [miProducto, setMiProducto] = useState('');
    return (
        <>
            <div className='comprascontainer'>
                <h2>Product</h2>
                <label htmlFor="producto">Product:</label>
                <input ref={inputName} value={miProducto} className='inputcompra' type='text' id="producto" onChange={(e) => setMiProducto(e.target.value)} />

                <button className='compra-btn'
                    onClick={() => {
                        inputName.current.focus();
                        setMiProducto("");
                        dispatch({
                            type:types.compror,
                            payload: { id: Date.now(), nombre: miProducto, cantidad: 1 }
                        })
                    }}>Add</button>


                {lista.map((producto) =>
                    <div key={producto.id}>
                        {producto.nombre} ({producto.cantidad} units)

                        <button className='btns' onClick={() => dispatch({ type: types.menos, payload: producto.id })}>-</button>

                        <button className='btns' onClick={() => dispatch({ type: types.mas, payload: producto.id })}>+</button>

                        <button className='btns' onClick={() => dispatch({ type: types.eliminar, payload: producto.id })}>X</button>


                    </div>
                )}


            </div >




        </>
    )
}

export default Comprar