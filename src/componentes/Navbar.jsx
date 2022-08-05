import React from 'react'
import CartWidget from './CartWidget'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="/">Deliciosos Mimos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                        <Link to="/" className='text-decoration-none'><a className="nav-link text-light">Inicio</a></Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/productos" className='text-decoration-none'><a className="nav-link text-light">Productos</a></Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/categorias" className='text-decoration-none'><a className="nav-link text-light">Categorias</a></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light"><CartWidget/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar