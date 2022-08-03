import React, { useEffect, useState } from 'react'
import ProductoMuestra from '../Utils/ProductoMuestra'

const ItemDetailContainer = () => {

    const [producto, guardarProducto] = useState([])

    useEffect(() => {
        obtenerProductos()
    }, [producto])

    const productoPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ProductoMuestra);

        }, 2000);
    })

    const obtenerProductos = async () => {
        try {
            const respuesta = await productoPromise
            guardarProducto(respuesta)
        } catch (error) {
            console.log(error)
        }
    }

    const submitComprar = () => { console.log("añadido al carrito") }


    return (
        <div className="container">
            <div className="card shadow">
                {
                    producto.map(item => {
                        return (
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="m-3 text-center">
                                        <img src={item.imagen} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-sm-6 p-3">
                                    <div class="card-body">
                                        <h5 class="card-title">{item.titulo}</h5>
                                        <p class="card-text">{item.descripcion}</p>
                                        <h5 class="text-dark">$ {item.precio}</h5>
                                        <a href="#" onClick={submitComprar} className="btn btn-success">Comprar</a>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }

            </div>
        </div>

    )
}

export default ItemDetailContainer