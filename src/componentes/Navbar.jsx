import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-light" href="#">Deliciosos Mimos</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar