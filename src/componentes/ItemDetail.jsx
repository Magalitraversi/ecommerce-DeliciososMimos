import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
//faTruckFast
const ItemDetail = ({ data }) => {
    const submitComprar = () => { alert("Felicidades por su compra") }

    const [cantidadSeleccionada, guardarCantidadSeleccionada] = useState(0)

    const { stock } = data

    console.log(cantidadSeleccionada)
    return (
        <div className="card shadow bg-dark">
            <div className="row">
                <div className="col-sm-6">
                    <div className="m-3 text-center">
                        <img src={data.imagen} className="img-fluid" />
                    </div>
                </div>
                <div className="col-sm-6 p-3">
                    <div className="card-body">
                        <h2 className="card-title fw-bold text-light">{data.titulo}</h2>
                        <div className='badge bg-primary text-wrap'>Unidades disponibles: {data.stock}</div>
                        <p className="card-text mt-2 mb-2 fst-italic text-light">{data.descripcion}</p>
                        <p className='text-light'><FontAwesomeIcon icon={faTruckFast} /> Envios desde $250</p>
                        {/* <h5 className="text-dark">$ {data.precio}</h5> */}
                        {
                            cantidadSeleccionada > 0 ?
                                <div className="row">
                                    <div className="col-sm-4 mt-2">
                                        <Link to="/carrito">
                                            <div className="btn btn-success w-100" onClick={submitComprar}>Comprar ahora</div>
                                        </Link>
                                    </div>
                                </div>
                                :
                                <ItemCount guardarCantidadSeleccionada={guardarCantidadSeleccionada} stock={stock} />
                        }


                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail