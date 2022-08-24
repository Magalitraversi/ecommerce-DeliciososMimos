import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import bd from '../Utils/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore';


const ItemDetailContainer = () => {

    //producto encontrado en el some
    const [producto, guardarProducto] = useState([])


    const [productosBD, setProductosBD] = useState([])



    //   useParams es un hook que nos brinda react-router-dom,
    //   su funcion es proporcionar los parametros definidos en la ruta.
    //   <Route path="/productos/:id" element={<ItemDetailContainer />} />, en este caso,
    //   despues de los ":" se proporciona "id". Y el mismo "id" lo proporcionamos en:
    //   <Link to={`/productos/${id}`} className="text-decoration-none"></Link>
    //   y lo obtenemos de la forma de abajo.   
    const { id } = useParams()

    useEffect(() => {
        getProductos()
        filtrarProducto()
    }, [productosBD])

    // obtener productos de firestore
    const getProductos = async () => {
        const coleccionProductos = collection(bd, 'productos')
        getDocs(coleccionProductos).then(response => {
            const product = response.docs.map(doc => (
                doc.data()
            ))
            setProductosBD(product)
        })
            .catch(error => {
                console.log(error.message)
            })
    }

    const filtrarProducto = () => {
        productosBD.some((item) => {
            if (item.id === id) {
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