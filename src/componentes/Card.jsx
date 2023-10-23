// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';
import '../estilos/tarjeta.css'
import { useState } from 'react';

export const Card = ({ imagen, titulo, descripcion, precio, manejarAgregarCompra, manejarQuitarCompra}) => {

    const [agregado, setAgregado] = useState(false)

    const agregar = () => {
        manejarAgregarCompra()
        setAgregado(true)
    }

    const quitar = () => {
        manejarQuitarCompra()
        setAgregado(false)
    }

    return (

        <div className="tarjeta">
            <img src={imagen} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titulo}</h3>
                <p className="tarjeta-descripcion">{descripcion}</p>
                <p className="tarjeta-precio">{precio}</p>
                
                {agregado
                    ?   <button type="button"
                    className="boton-quitar"
                    onClick={quitar}
                >Quitar</button>



                    :  <button type="button"
                    className="boton-agregar"
                    onClick={agregar}
                >Añadir al carrito</button>
                    
                 
                }

            </div>



        </div>

    )
}

Card.propTypes = {
    imagen: PropTypes.any.isRequired,
    titulo: PropTypes.any.isRequired,
    descripcion: PropTypes.any.isRequired,
    precio: PropTypes.any.isRequired,
    manejarAgregarCompra: PropTypes.any.isRequired,
    manejarQuitarCompra: PropTypes.any.isRequired,
}