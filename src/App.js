import React from 'react';
import Footer from './componentes/Footer.jsx';
import Navbar from './componentes/Navbar.jsx';
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer.jsx';


function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='text-center'>Ecommerce Deliciosos mimos  </h1>
      <ItemListContainer />
      <ItemDetailContainer />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
