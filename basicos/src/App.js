import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  //Crear listado de productos
  const [ productos, guardarProductos] = useState([
    { id: 1, nombre: 'Camisa ReactJs', precio: 50},
    { id: 2, nombre: 'Camisa VueJs', precio: 40},
    { id: 3, nombre: 'Camisa NodeJs', precio: 30},
    { id: 4, nombre: 'Camisa Angular', precio: 20}
  ]);

  //State para un carrito de compras pos1-referencia pos2-funcion qu elo va a modificar
  const [carrito, agregarProducto] = useState([]);


  // Obtener Fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo='Tienda Virtual'
      />

      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />
       
      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
