import React, { useState } from 'react'
import { Link } from "react-router-dom";

const ItemCount = ({ data, accion }) => {


    const { titulo, descripcion, imagen, stock, id } = data

    const [contador, modificarContador] = useState(1)

    const stockActual = (stock - contador)

    const disminuirProducto = () => {
        if (contador >= 1) {
            modificarContador(contador - 1)
        }
    }

    const aumentarProducto = () => {
        if (stockActual >= stockActual && stockActual > 0) {
            modificarContador(contador + 1)
        }
    }

    return (
        <div className="col-sm-3">
            <Link to={`/productos/${id}`} className="text-decoration-none">
                <div className="card shadow mb-3 carta-producto">

                    <img src={imagen} className="img-fluid" alt="..." />
                    <div className="card-body bg-dark">
                        <h5 className="card-title text-light">{titulo} </h5>
                        <p className="card-text text-light">{descripcion} </p>
                        <p className="card-text text-light">stock actual: {stockActual} </p>

                        <hr />
                        <div className="row text-center">
                            <div className="col-sm-4">
                                <button className='btn btn-dark' onClick={disminuirProducto}>-</button>

                            </div>
                            <div className="col-sm-4">
                                <p className='text-light'>{contador}</p>
                            </div>
                            <div className="col-sm-4">
                                <button className='btn btn-dark' onClick={aumentarProducto}>+</button>

                            </div>
                        </div>
                        <div className="col-auto text-center">
                            <button className="btn btn-primary" onClick={accion}>Añadir al carrito</button>

                        </div>


                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ItemCount







