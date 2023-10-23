
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { Card } from './Card';
import { ProductosContext } from '../context/ProductosContext';
import { CarritoContext } from '../context/CarritoContext';



export const ComprasPage = () => {

  const { productos } = useContext(ProductosContext)
  
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

  const manejarAgregarCompra = (compra) => {
    agregarCompra(compra)
  }

  const manejarQuitarCompra = (id) => {
    eliminarCompra(id)
  }


  return (
    <>
    <h1>Productos:</h1>

    {productos.map(producto => (

        <Card key={producto.id}
        imagen={producto.image}
        titulo={producto.title}
        descripcion={producto.description}
        precio={producto.price}
        manejarAgregarCompra={() => manejarAgregarCompra(producto)}
        manejarQuitarCompra={() => manejarQuitarCompra(producto.id)}
        >
        </Card>

    ))}

      
      
        
    </>
  )
}
