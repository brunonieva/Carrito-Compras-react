
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import '../estilos/tabla.css'
import { CarritoContext } from '../context/CarritoContext'

export const CarritoPage = () => {

  const { listaCompras, aumentarCompra, disminuirCompra, eliminarCompra } = useContext(CarritoContext)

  const calcularTotal = () => {
    return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
  }

  return (
    <>
      <div className='tabla-compras'>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {
              listaCompras.map(producto => (
                <tr key={producto.id}>
                  <th scope="row">{producto.title}</th>
                  <td>{producto.price}</td>
                  <td>
                    <button type="button" onClick={() => disminuirCompra(producto.id)}>-</button>
                    <button className='btn btn-primary'>{producto.cantidad}</button>
                    <button type="button" onClick={() => aumentarCompra(producto.id)}>+</button>
                  </td>
                  <td>
                    <button
                      type='button'
                      className='btn btn-danger'
                      onClick={() => eliminarCompra(producto.id)}
                    >eliminar</button>
                  </td>


                </tr>
              ))
            }
            <tr>
              <th scope="row">TOTAL</th>
              <td></td>
              <td></td>
              <td>$ {calcularTotal()}</td>
            </tr>


          </tbody>

        </table>
      </div>




      <div className='d-grid gap-2'>
        <button type="button" className="btn btn-success" >comprar</button>
      </div>

    </>
  )
}
