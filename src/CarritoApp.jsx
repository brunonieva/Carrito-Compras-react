
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavBar } from './componentes/NavBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CarritoPage } from './componentes/CarritoPage';
import { ComprasPage } from './componentes/ComprasPage';
import { ProductosProvider } from './context/ProductosProvider';
import { CarritoProvider } from './context/CarritoProvider';



export const CarritoApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>

        <NavBar></NavBar>
        <div className="container">
          <Routes>

            <Route path='/' element={<ComprasPage></ComprasPage>}></Route>
            <Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>
            <Route path='/*' element={<Navigate to='/' ></Navigate>}></Route>

          </Routes>
        </div>
        
      </CarritoProvider>
    </ProductosProvider>
  )
}

