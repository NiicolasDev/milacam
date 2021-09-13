import React from 'react';
import { Link } from 'react-router-dom';
import Brand from 'components/brand/Brand';
import Information from 'components/information/Information';
import { Checkbox } from 'components/checkbox/Checkbox';
import { data, categoriesCats, brandsCats ,sizes, ages } from 'api/data';
import Product from 'components/product/Product';
import './Cats.css'

const Cats = ({ productsCart, setProductsCarts, setProductInformation }) => {
    return (
        <>
            <div className="container-info-cat">
            <div className="box-link-home">
            <Link to="/" className="home-link">Inicio</Link> <span className="dog-link"><i className="fas fa-chevron-right arrow-right"/> Gatos</span>
            </div>
            <div className="box-title-section">
                    <h3 className="title-dog-sec">Gatos</h3>
            </div>
        </div>
        <button className="btn btn-success p-2 btn-filter" id="btn">Filtrar</button>
            <div className="container-cats d-flex">
                <div className="container-cats-filter">
                <h3 className="mt-2 mb-1 text-filter_dog"><i className="fas fa-paw paw" /> Categoria</h3>
                    <div className="container-categories">
                    {
                        categoriesCats.map((item,index) => <Checkbox label={item.label} subItem={item.subItem} key={index} />)
                    }
                    </div>
                    <hr />
                    <h3 className="mt-2 mb-1 text-filter_dog"><i className="fas fa-paw paw" /> Marca</h3>
                    <div className="container-categories">
                    {
                        brandsCats.map((brand, index) => <Checkbox label={brand.label} subItem={brand.subItem} key={index} />)
                    }
                    </div>
                    <hr />
                    <h3 className="mt-2 mb-1 text-filter_dog"><i className="fas fa-paw paw" /> Tamaño</h3>
                    <div className="container-categories">
                    {
                        sizes.map((size, index) => <Checkbox label={size.label} subItem={size.subItem} key={index} />)
                    }
                    </div>
                    <hr />

                    <h3 className="mt-2 mb-1 text-filter_dog"><i className="fas fa-paw paw" /> Edad</h3>
                    <div className="container-categories">
                    {
                        ages.map((age, index) => <Checkbox label={age.label} subItem={age.subItem} key={index} />)
                    }
                    </div>
                </div>
                <div className="container-cats-products d-flex justify-content-center flex-wrap gap-4">
                    {
                        // data.map( (product, index) => <Product  product={product} key={index}/> )
                        data.filter( (prodcutF) => prodcutF.cat).map( product => <Product  
                        product={product}
                        setProductsCarts={setProductsCarts}
                        productsCart={productsCart}
                        key={product.id}
                        setProductInformation={setProductInformation}
                        /> )
                    }
                </div>
            </div>
            <Brand />
            <Information />
        </>

    );
}

export default Cats;