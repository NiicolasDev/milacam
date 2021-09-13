import React from 'react'
import './Footer.css'
const Footer = () => {

    const date = new Date().getFullYear();
    return (
        <>
            <footer className="footer" id="footer">
                <div className="container-footer d-flex  justify-content-flex-start justify-content-sm-around flex-wrap">
                    <div className="row-footer m-4">
                        <h3 className="text-white">Milacam</h3>
                        <p className="text-white">Inicio</p>
                        <p className="text-white">Nosotros</p>
                        <p className="text-white">Marcas</p>
                    </div>
                    <div className="row-footer m-4">
                        <h3 className="text-white">Productos para perros</h3>
                        <p className="text-white">Comidad</p>
                        <p className="text-white">Cuidado e Higine</p>
                        <p className="text-white">Limpieza y orinia</p>
                        <p className="text-white">Juguetes</p>
                        <p className="text-white">Comedores y bebedores</p>
                    </div>
                    <div className="row-footer m-4">
                        <h3 className="text-white">Productos para gatos</h3>
                        <p className="text-white">Comidad</p>
                        <p className="text-white">Cuidado e Higine</p>
                        <p className="text-white">Limpieza y orinia</p>
                        <p className="text-white">Juguetes</p>
                        <p className="text-white">Comedores y bebedores</p>
                    </div>
                </div>
            </footer>
            <div className="cophry d-flex justify-content-between" id="copy">
                <span className="text-copry"> &copy; {date} Milacam Todos los derechos reservados.</span>
                <span className="text-copry">Desarrollada por: <a href="https://portafolio-nicodev.netlify.app/">NicolásDev</a></span>
            </div>

        </>
    )
}

export default Footer
