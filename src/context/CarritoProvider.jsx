// eslint-disable-next-line no-unused-vars
import React from 'react'
import { CarritoContext } from './CarritoContext';
import { PropTypes } from 'prop-types';
import { useReducer } from 'react'



export const CarritoProvider = ({ children }) => {

    const initialState = []

    const comprasReducer = (state = initialState, action = {}) => {

        switch (action.type) {
            case '[CARRITO] agregar compra':
                return [...state, action.payload]
            case '[CARRITO] aumentar compra':
                return state.map(item => {
                    const cant = item.cantidad + 1
                    if (item.id === action.payload) 
                        return {...item, cantidad : cant}
                    else return item
                })
            case '[CARRITO] disminuir compra':
                return state.map(item => {
                    const cant = item.cantidad - 1
                    if (item.id === action.payload && item.cantidad > 1) 
                        return {...item, cantidad : cant}
                    else return item
                })
            case '[CARRITO] eliminar compra':
                return state.filter(compra => compra.id !== action.payload)
            default:
                return state
        }
    }

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    // metodos tareas 

    const agregarCompra = (compra) => {
        compra.cantidad = 1
        const action = {
            type: '[CARRITO] agregar compra',
            payload: compra
            
        }
        dispatch(action)
    }
    const aumentarCompra = (id) => {
        const action = {
            type: '[CARRITO] aumentar compra',
            payload: id
        }
        dispatch(action)
    }
    const disminuirCompra = (id) => {
        const action = {
            type: '[CARRITO] disminuir compra',
            payload: id
        }
        dispatch(action)
    }
    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] eliminar compra',
            payload: id
        }
        dispatch(action)
    }



    return (

        <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCompra, disminuirCompra, eliminarCompra }}>
            {children}
        </CarritoContext.Provider>

    )
}

CarritoProvider.propTypes = {
    children: PropTypes.any.isRequired,
}
