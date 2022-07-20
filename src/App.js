import React from 'react';
import Footer from './componentes/Footer.jsx';
import Navbar from './componentes/Navbar.jsx';
import ListadoProductos from './componentes/ListadoProductos.jsx';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Ecommerce Deliciosos mimos  </h1>
      <ListadoProductos/>

      <Footer/>
    </div>
  );
}

export default App;
