import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'


const Header = ({ cartItems }) => {

    window.addEventListener('scroll', function () {
        const header = document.querySelector('header')
        header && header.classList.toggle('sticky', window.scrollY > 90)
    })

    const moveCart = () => {
        const cart = document.querySelector('#cart')
        cart.classList.toggle('move')
    }

    return (
        <header id="header" >
            <div className="container-header justify-content-xl-around--">
                <div className="btn-bar_main">
                    <label htmlFor="menu-btn" className="menu-btn-open"><i className="fas fa-grip-lines bar-menu" /></label>
                </div>
                <Link to="/">
                    <img className="logo" src="./assets/img/logo.png" alt="Logo" />
                </Link>
                <div className="inputwithicon">
                    <input className="search" type="text" placeholder="¿Qué producto buscas?" />
                    <button className="btn-search"><i className="fas fa-search"></i></button>
                </div>
                <button className="btn-car position-relative"
                    onClick={() => moveCart()} >
                    {cartItems > 0 ? <span className="numberItems">{cartItems}</span> : null}
                    <i className="fas fa-shopping-cart" />
                </button>
            </div>
            <nav className="container-nav" >
                <input type="radio" className="inputShow" name="slide" id="menu-btn"/>
                <input type="radio" className="inputShow" name="slide" id="close-btn"/>
                <ul className="container-items" id="main">
                  <label htmlFor="close-btn"><i className="fas fa-times close-btn" /></label> 
                    <li className="section-link">
                        <div className="box-items">
                            <Link to="/perros" className="link desktop-item">
                                <img className="img-item" src="./assets/img/dog.png" alt="dog" />Perros
                            </Link>
                        </div>
                        <input type="checkbox" className="inputShow" id="showMega" />
                        <label htmlFor="showMega" className="mobile-item link">
                        <img className="img-item" src="./assets/img/dog.png" alt="dog" />Perros</label>
                        <div className="mega-box">
                            <div className="content">
                                <div className="row">
                                    <div className="header-title">Comida</div>
                                    <ul className="mega-links">
                                        <li><Link to="/perros" className="text-link">Concentrados</Link></li>
                                        <li><Link to="/perros" className="text-link">Alimento Medicado</Link></li>
                                        <li><Link to="/perros" className="text-link">Trozos Húmedos</Link></li>
                                        <li><Link to="/perros" className="text-link">Snacks y Galletas</Link></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <div className="header-title">Juguetes</div>
                                    <ul className="mega-links">
                                        <li><Link to="/perros" className="text-link">Pelotas</Link></li>
                                        <li><Link to="/perros" className="text-link">Huesos</Link></li>
                                        <li><Link to="/perros" className="text-link">Mordedores</Link></li>
                                        <li><Link to="/perros" className="text-link">Con cuerda</Link></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <div className="header-title">accesorios</div>
                                    <ul className="mega-links">
                                        <li><Link to="/perros" className="text-link">Camas</Link></li>
                                        <li><Link to="/perros" className="text-link">Colchonetas</Link></li>
                                        <li><Link to="/perros" className="text-link">Mantas</Link></li>
                                        <li><Link to="/perros" className="text-link">Cobijas</Link></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <img className="img-items" src="./assets/img/dog-item.jpg" alt="" />
                                </div>
                            </div>
                        </div>

                    </li>
                    <li className="section-link">
                        <div className="box-items">

                            <Link to="/gatos" className="link desktop-item">
                                <img className="img-item" src="./assets/img/cat.png" alt="cat" />Gatos
                            </Link>
                        </div>
                        <input type="checkbox" className="inputShow" id="showMega2" />
                        <label htmlFor="showMega2" className="mobile-item link">
                        <img className="img-item" src="./assets/img/cat.png" alt="cat" />Gatos</label>
                        <div className="mega-box">
                            <div className="content">
                                <div className="row">
                                    <div className="header-title">Comida</div>
                                    <ul className="mega-links">
                                        <li><Link to="/perros" className="text-link">Concentrados</Link></li>
                                        <li><Link to="/perros" className="text-link">Alimento Medicado</Link></li>
                                        <li><Link to="/perros" className="text-link">Trozos Húmedos</Link></li>
                                        <li><Link to="/perros" className="text-link">Snacks y Galletas</Link></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <div className="header-title">Juguetes</div>
                                    <ul className="mega-links">
                                        <li><Link to="/perros" className="text-link">Pelotas</Link></li>
                                        <li><Link to="/perros" className="text-link">Ratones</Link></li>
                                        <li><Link to="/perros" className="text-link">Peluches</Link></li>
                                        <li><Link to="/perros" className="text-link">Sonajeros</Link></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <div className="header-title">accesorios</div>
                                    <ul className="mega-links">
                                        <li><Link to="/perros" className="text-link">Gimnacio</Link></li>
                                        <li><Link to="/perros" className="text-link">Camas</Link></li>
                                        <li><Link to="/perros" className="text-link">Rascaderos</Link></li>
                                        <li><Link to="/perros" className="text-link">Comedores</Link></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <img className="img-items" src="./assets/img/cat-item.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="section-link">
                        <div className="box-items">

                            <Link to="/" className="link desktop-item">
                                <img className="img-item" src="./assets/img/paw.png" alt="cat" />Otras Mascotas
                            </Link>
                        </div>
                        <Link to="/">
                        <input type="radio" className="inputShow" id="close-btn"/>
                        <label htmlFor="close-btn" className="mobile-item link">
                        <img className="img-item" src="./assets/img/paw.png" alt="paw" />Otras Mascotas</label>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
