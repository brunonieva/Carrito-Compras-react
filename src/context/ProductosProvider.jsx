// eslint-disable-next-line no-unused-vars
import React from 'react'
import { ProductosContext } from './ProductosContext'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const ProductosProvider = ( {children} ) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
      fetchProductos()
      console.log('se inicio el use effect')
    }, [])
    
    const fetchProductos = async() => {
        const respuesta = await fetch('https://fakestoreapi.com/products')
        const data = await respuesta.json()
        setProductos(data)
        console.log(data)
    }

    return (

        <ProductosContext.Provider value={{productos}}>
            {children}
        </ProductosContext.Provider>

    )
}

ProductosProvider.propTypes = {
    children: PropTypes.any.isRequired,
}

