import React from 'react';
import Slide from "components/slide/Slide";
import Services from 'components/services/Services';
import Offers from "components/offers/Offers";
import Notices from "components/notices/Notices";
import Brand from "components/brand/Brand";
import Information from "components/information/Information";

const Home = ({productsCart,setProductsCarts,setProductInformation }) => {
    return (
        <>
            <Slide />
            <Services />
            <Offers
            productsCart={productsCart}
            setProductsCarts={setProductsCarts}
            setProductInformation={setProductInformation}
            />
            <Notices />
            <Brand />
            <Information />
        </>
    );
}

export default Home;