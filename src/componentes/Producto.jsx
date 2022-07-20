import React from 'react'

const Producto = ({titulo, descripcion, imagen}) => {
  return (

    <div className="col-sm-3">
      <div class="card shadow">

        <img src={imagen} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{titulo} </h5>
          <p class="card-text">{descripcion} </p>
          <a href="#" class="btn btn-primary">Añadir al carrito</a>
        </div>
      </div>
    </div>
  )
}

export default Producto