import React from 'react'
import './Services.css'
const Services = () => {
    return (
        <section className="container-services">
            <h2 className="text-center title-service">Servicios</h2>
            <div className="box-services">
                <div className="services">
                    <span><i className="fas fa-shipping-fast"></i></span>
                    <p className="title-services">Domicilio Gratis* Facatativa<br />
                        <span className="text-services">Por compras iguales o <br />
                            superiores a $150.000</span></p>
                </div>
                <div className="services">
                    <span><i className="far fa-handshake"></i></span>
                    <p className="title-services">Domicilio Gratis* Facatativa<br />
                        <span className="text-services">Por compras iguales o <br />
                            superiores a $150.000</span></p>
                </div>
                <div className="services">
                    <span><i className="fas fa-dolly"></i></span>
                    <p className="title-services">Domicilio Gratis* Facatativa<br />
                        <span className="text-services">Por compras iguales o <br />
                            superiores a $150.000</span></p>
                </div>
            </div>
        </section>
    )
}

export default Services
