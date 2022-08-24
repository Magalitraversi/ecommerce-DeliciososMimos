import React, { useEffect, useState } from 'react'
import Item from './Item'
import ListadoProductos from '../Utils/ListadoProductos'
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import bd from '../Utils/firebaseConfig'



const ItemListContainer = () => {

    const [productos, guardarProductos] = useState([])

    const [productosBD, setProductosBD] = useState([])

    useEffect(() => {
        getProductos()
        const obtenerProductos = async () => {
            try {
                const respuesta = await productosPromise
                guardarProductos(respuesta)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerProductos()
    }, [productosBD])


    //parametro de categoria
    const { categoria } = useParams()
    //filtra busqueda por categoria
    const filterCategory = productosBD.filter((item) => item.categoria === categoria)

    const productosPromise = new Promise((resolve) => {
        setTimeout(() => {
            if (categoria) {
                resolve(filterCategory)
            } else {
                resolve(productosBD);
            }

        }, 1000);
    })


    //obtener productos de firestore
    const getProductos = async () => {
        const coleccionProductos = collection(bd, 'productos')
        getDocs(coleccionProductos).then(response => {
            const product = response.docs.map(doc => (
                doc.data()
                ))
            setProductosBD(product)
        })
            .catch(error => {
                console.log(error)
            })
    }


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