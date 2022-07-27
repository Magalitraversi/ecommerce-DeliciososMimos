import React, { useState } from 'react'

const ItemCount = ({ producto1, accion }) => {

    console.log(producto1)
    const {titulo, descripcion, imagen, stock} = producto1

    const [contador, modificarContador] = useState(1)

    const stockActual = (stock - contador)
    
    const disminuirProducto = () => {
        modificarContador(contador - 1)
    }
    
    const aumentarProducto = () => {
        modificarContador(contador + 1)
    }
    
    return (
        <div className="col-sm-3">
            <div class="card shadow">

                <img src={imagen} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{titulo} </h5>
                    <p class="card-text">{descripcion} </p>
                    <p class="card-text">stock actual: {stockActual} </p>


                    <div className="row">
                        <div className="col-sm-4">
                            <button className='btn btn-dark' onClick={disminuirProducto}>-</button>

                        </div>
                        <div className="col-sm-4">
                            <p>{contador}</p>
                        </div>
                        <div className="col-sm-4">
                            <button className='btn btn-dark' onClick={aumentarProducto}>+</button>

                        </div>
                    </div>
                    <button class="btn btn-primary" onClick={accion}>Añadir al carrito</button>


                </div>
            </div>
        </div>
    )
}

export default ItemCount







