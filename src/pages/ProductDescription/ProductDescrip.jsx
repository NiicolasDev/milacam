import React from 'react';
import CurrencyFormat from 'react-currency-format';
import Brand from 'components/brand/Brand';
import Information from 'components/information/Information';
import './ProductDescrip.css';


const ProductDescrip = ({ product }) => {
    return (
        <>
            <div className="container-descript d-flex justify-content-center flex-wrap gap-5 align-items-center">
                <div className="container-descript_product justify-content-center">
                    <img src={product.img} alt="img-dog" />
                </div>
                <div className="container-descript_text">
                    <h2 className="mb-3 title-info">{product.name}</h2>
                    <div className="avible"></div>
                    <span className="available"><i className="fas fa-check"></i>Disponible</span>
                    <hr />
                    <span className="cursor-pointer addFavorite"><i className="fas fa-heart" />Añadir a tus favoritos</span>
                    <p className="item-info mt-2 ">{product.info}</p>
                </div>
                <div className="container-descript_shop">
                    <div className="box-addCart border d-flex justify-content-center flex-column">
                        <button className="btn btn-success btn-shop-info mb-2">
                            <i className="fas fa-shopping-cart cart-info" />Añadir al carrito
                        </button>
                        <p className="text-center m-0">Precio</p>
                        <div className="my-3">
                            <CurrencyFormat value={product.precioHoy} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div className="price-info mb-1 text-center">{value}</div>} />
                        </div>
                        <p className="text-center m-0">Precio Antes</p>
                        <div >
                            <CurrencyFormat value={product.precioNormal} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div className="price-info-normal text-center">{value}</div>} />
                        </div>
                    </div>
                </div>
            </div>
            <Brand />
            <Information />
        </>
    )
}

export default ProductDescrip
