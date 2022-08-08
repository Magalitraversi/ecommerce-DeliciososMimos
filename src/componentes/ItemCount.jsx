import React, { useState } from 'react'

const ItemCount = ({ guardarCantidadSeleccionada, stock }) => {

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

    const agregar = () => {
        guardarCantidadSeleccionada(contador)
    }


    return (
        <div className="">

            <div className='col-sm-3'>
                <div class="input-group mb-3 text-center">
                    <button className="btn btn-outline-secondary" type="button" onClick={disminuirProducto}>-</button>
                    <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" value={contador} disabled />
                    <button className="btn btn-outline-secondary" type="button" onClick={aumentarProducto}>+</button>
                </div>

            </div>
            <div className="col-sm-4">

                <button className="btn btn-warning w-100" onClick={agregar}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount