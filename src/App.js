import React from 'react';
import Footer from './componentes/Footer.jsx';
import Navbar from './componentes/Navbar.jsx';
import ItemListContainer from './componentes/ItemListContainer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='text-center'>Ecommerce Deliciosos mimos  </h1>
      <ItemListContainer />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
