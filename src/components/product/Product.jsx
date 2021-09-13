import React from 'react'
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
import './Product.css'


const Product = ({ product, productsCart, setProductsCarts, setProductInformation }) => {
    const addToCart = (product) => {
        const searchProduct = productsCart.find(item => item.id === product.id);
        if (searchProduct === undefined) {
            setProductsCarts([...productsCart, { ...product, quantity: 1 }]);

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar: true,
                showCloseButton: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                inputLabel: 'Message',
                title: `Producto: <br>${product.name}<br>Agregado Correctamente`,
            })
        } else {
            const products = productsCart.map(item => {
                return { ...item, quantity: item.quantity + (item.id === product.id ? 1 : 0) }
            })

            setProductsCarts(products)
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'info',
                title: 'Ya agregaste este producto'
            })
        }

    };

    return (
        <div className="box-products">
            <div className="card-content">
                <Link to={`/producto/${product?.id}`} >
                    <img src={product?.img} alt="imagen" onClick={() => setProductInformation(product)} />
                </Link>
                <p className="text-center title-producto">{product?.name}</p>
                <div className="prices">
                    <div className="prices-today">
                        <span className="prince-text">Precio hoy</span>
                        <CurrencyFormat value={product.precioHoy} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div className="price-number">{value}</div>} />
                    </div>
                    <div className="prices-normal">
                        <span className="prince-text">Precio normal</span>
                        <CurrencyFormat value={product.precioNormal} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div className="price-number-stripe text-center">{value}</div>} />
                    </div>
                </div>
                <button className="btn-cart-shop"
                    onClick={() => addToCart(product)} >
                    <i className="fas fa-cart-plus" />
                    <span className="more-cart">✚</span>
                </button>
            </div>
        </div>
    )
}
export default Product