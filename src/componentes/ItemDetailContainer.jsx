import React, { useEffect, useState } from 'react'
import listadoProductos from '../Utils/ListadoProductos'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

    //productos llamados en la promise
    const [productos, guardarProductos] = useState([])
    //producto encontrado en el some
    const [producto, guardarProducto] = useState([])

    //   useParams es un hook que nos brinda react-router-dom,
    //   su funcion es proporcionar los parametros definidos en la ruta.
    //   <Route path="/productos/:id" element={<ItemDetailContainer />} />, en este caso,
    //   despues de los ":" se proporciona "id". Y el mismo "id" lo proporcionamos en:
    //   <Link to={`/productos/${id}`} className="text-decoration-none"></Link>
    //   y lo obtenemos de la forma de abajo.   
    const { id } = useParams()

    useEffect(() => {
        filtrarProducto()
        obtenerProductos()
    }, [productos])

    const productosPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listadoProductos);
            
        },15);
    })

    const obtenerProductos = async () => {
        try {
            const respuesta = await productosPromise
            guardarProductos(respuesta)
        } catch (error) {
            console.log(error)
        }
    }

    const filtrarProducto = () => {
        productos.some((item) => {
            if(item.id == id){
                guardarProducto(item)
            }
        })
    }

    return (
        <div className="container mt-4">
            <ItemDetail data={producto} />
        </div>

    )
}

export default ItemDetailContainer