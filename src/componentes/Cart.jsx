import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Cart = () => {
    const [total, setTotal] = useState(0)

    const { cartProductos, limpiarCarro, eliminarProductoCarrito } = useContext(CartContext)

    useEffect(() => {
        sumarTotal(cartProductos)
    }, [total, cartProductos])


    const sumarTotal = (arr) => {
        let sum = 0;
        arr.forEach(function (item) {
            let calculo = item.precio * item.contador;
            sum += calculo;
        })
        setTotal(sum);
    }

    const submitComprar = () => { alert("Felicidades por su compra") }

    return (
        <div className="container mt-2">
            <div className="card shadow bg-dark">
                <div className="p-2">
                    <div className="card-header">

                        <h2 className='text-light'> Tu carrito de compras:</h2>
                    </div>

                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Titulo</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Precio x Unidad</th>
                                        <th scope="col">Precio x Cantidad</th>
                                        <th scope="col">Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        cartProductos.map((product) => {
                                            let precioTotal = + product.precio * product.contador;
                                            return (
                                                <tr key={product.id}>
                                                    <td>{product.titulo}</td>
                                                    <td>{product.contador}</td>
                                                    <td>{product.precio}</td>
                                                    <td>{precioTotal}</td>
                                                    <td>
                                                        <button className="btn btn-warning" onClick={() =>eliminarProductoCarrito(product.id)}>

                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </button>

                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                        </div>

                    </div>
                    <div className="card-footer text-end">
                        <p className='text-light m-3'>Total: ${total}</p>
                        <button className='m-3 btn btn-danger' onClick={limpiarCarro}>Vaciar carrito</button>
                        <button className='m-3 btn btn-success' onClick={submitComprar}>Comprar</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Cart