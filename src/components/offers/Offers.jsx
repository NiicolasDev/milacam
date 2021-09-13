// import React from 'react';
// import Product from '../product/Product';
// import { data } from 'api/data';
// import './Offers.css';
// import Slider from "react-slick";


import React from 'react'
import Carousel from 'react-elastic-carousel';
import Product from '../product/Product';
import { data } from 'api/data';
import './Offers.css';

const Offers = ({ productsCart, setProductsCarts, setProductInformation }) => {


    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    return (

        <>
            <section className="container-offers">
                <h3 className="text-center title-offers mb-5">Ofertas exclusivas para tu mascota</h3>
                <div className="container-img-offers mb-5">
                    <img src="./assets/img/banner2.jpg" alt="ofertas" />
                </div>
                <div className="carousel-cursor">
                    <Carousel breakPoints={breakPoints}>
                        {
                            data.filter(pruducto => pruducto.discount).map((product) => <Product product={product} key={product.id} productsCart={productsCart} setProductsCarts={setProductsCarts} setProductInformation={setProductInformation} />)
                        }
                    </Carousel>
                </div>
            </section>
        </>
    )
}
export default Offers
