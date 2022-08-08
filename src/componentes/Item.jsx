import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Item = ({ data }) => {



    const { titulo, descripcion, imagen, stock, id } = data

    return (
        <div className="col-sm-3">
            <Link to={`/productos/${id}`} className="text-decoration-none">
                <div className="card shadow mb-3 carta-producto">

                    <img src={imagen} className="img-fluid" alt="..." />
                    <div className="card-body bg-dark">
                        <h5 className="card-title text-light">{titulo} </h5>
                        <p className="card-text text-light">{descripcion} </p>
                        <p className="card-text text-light">stock actual: {stock} </p>
                    </div>

                </div>
            </Link>
        </div >
    )
}

export default Item







