import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
//faTruckFast
const ItemDetail = ({ data }) => {
    const submitComprar = () => { alert("Felicidades por su compra") }
    return (
        <div className="card shadow">
            <div className="row">
                <div className="col-sm-6">
                    <div className="m-3 text-center">
                        <img src={data.imagen} className="img-fluid" />
                    </div>
                </div>
                <div className="col-sm-6 p-3">
                    <div className="card-body">
                        <h2 className="card-title fw-bold">{data.titulo}</h2>
                        <div className='badge bg-primary text-wrap'>Unidades disponibles: {data.stock}</div>
                        <p className="card-text mt-2 mb-2 fst-italic">{data.descripcion}</p>
                        <p className='text-dark'><FontAwesomeIcon icon={faTruckFast} /> Envios desde $250</p>
                        {/* <h5 className="text-dark">$ {data.precio}</h5> */}
                        <div className="row">
                            <div className="col-sm-6 mt-2">

                                <div className="btn btn-success w-100" onClick={submitComprar}>Comprar ahora</div>
                            </div>
                            <div className="col-sm-6 mt-2">
                                <div className="btn btn-dark w-100">Agregar al carrito</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail