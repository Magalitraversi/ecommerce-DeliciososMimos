import React from 'react'
import ItemCount from './ItemCount'
import Producto from './Producto'

const ListadoProductos = () => {


    const producto1 = {
            titulo: "Producto",
            descripcion: "Descripcion del producto",
            imagen: "https://cuk-it.com/wp-content/uploads/2020/07/thumb02-1-1024x576.jpg",
            stock: 5,
        }

    const submitComprar = () => {console.log("añadido al carrito")}

    return (
        <div className='row mt-4'>
            <Producto
                titulo="Tableta"
                descripcion="Elaborada con el chocolate que se ajuste a tu paladar"
                imagen="https://s1.eestatic.com/2018/11/07/actualidad/actualidad_351478872_104884997_1706x960.jpg"
            />
            <ItemCount 
                producto1={producto1}
                accion={submitComprar}
            />
        </div>
    )
}

export default ListadoProductos