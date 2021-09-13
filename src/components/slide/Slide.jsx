import React from 'react'
import '../slide/Slide.css'

const Slide = () => {
    return (
        <>
            <div className="container-text-prom">
                <p>Esta semana domicilio Gratis* Bogotá y Sabana por compras iguales o superiores a $90.000</p>
            </div>
            <div className="container-fluid slide">
                <div className="row-fluid">
                    <div className="col">
                        <div className="carousel slide" id="carousel" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="img-fluid" src="./assets/img/banner.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                    <img className="img-fluid" src="./assets/img/banner.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                    <img className="img-fluid" src="./assets/img/banner.jpg" alt="" />
                                </div>
                            </div>
                            {/* Controls slider */}
                            <button className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next"
                                type="button"
                                data-bs-target="#carousel"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide
