import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import listadoProductos from '../Utils/ListadoProductos'




const ItemListContainer = () => {

    const [productos, guardarProductos] = useState([])


    useEffect(() => {
        obtenerProductos()
    }, [productos])

    const productosPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listadoProductos);
            
        },2000);
    })

    const obtenerProductos = async () => {
        try {
            const respuesta = await productosPromise
            guardarProductos(respuesta)
        } catch (error) {
            console.log(error)
        }
    }

    const submitComprar = () => { console.log("añadido al carrito") }


    return (
        <div className="container">
            <div className='row mt-4'>
                {
                    productos.map(item => {
                        return (
                            <ItemCount
                                key={item.id}
                                data={item}
                                accion={submitComprar}
                            />
                        )


                    })
                }
            </div>
        </div>
    )
}

export default ItemListContainer;