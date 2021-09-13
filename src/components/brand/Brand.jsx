import React from 'react'
import Carousel from 'react-elastic-carousel';
import './Brand.css'
const Brand = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 240, itemsToShow: 2 },
        { width: 480, itemsToShow: 3 },
        { width: 720, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 },
    ];

    return (
        <section className="container-brand">
            <h3 className="text-center title-brand">Las mejores marcas para tu mascota</h3>
            <div className="clas">
                <Carousel breakPoints={breakPoints}>
                    <img src="/assets/img/brand4.jpg" className="m-1" alt="" />
                    <img src="/assets/img/brand5.jpg" className="m-1" alt="" />
                    <img src="/assets/img/brand6.jpg" className="m-1" alt="" />
                    <img src="/assets/img/brand7.jpg" className="m-1" alt="" />
                    <img src="/assets/img/brand1.jpg" className="m-1" alt="" />
                    <img src="/assets/img/brand2.jpg" className="m-1" alt="" />
                    <img src="/assets/img/brand3.jpg" className="m-1" alt="" />
                </Carousel>
            </div>
        </section>
    )
}

export default Brand
