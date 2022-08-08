import React, { useEffect, useState } from 'react'
import Item from './Item'
import ListadoProductos from '../Utils/ListadoProductos'
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

    const [productos, guardarProductos] = useState([])
    
    
    useEffect(() => {

        const obtenerProductos = async () => {
            try {
                const respuesta = await productosPromise
                guardarProductos(respuesta)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerProductos()
    }, [productos])

    const {categoria} = useParams()

    const filterCategory = ListadoProductos.filter((item) => item.categoria === categoria)

    
    const productosPromise = new Promise((resolve) => {
        setTimeout(() => {
            if (categoria) {
                resolve(filterCategory)
            }else {
                resolve(ListadoProductos);
            }
            
        },1000);
    })

    const submitComprar = () => { console.log("añadido al carrito") }


    return (
        <div className="container">
            <div className='row mt-4'>
                {
                    productos.map(item => {
                        return (
                            <Item
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