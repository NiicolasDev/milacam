import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ products, setProducts }) => {

    const handleChange = (value, id) => {
        const newQuantities = products.map((product) => {
            if (product.id === id) {
                const item = product;
                item.quantity = value;
                return item;
            } else {
                return product;
            }
        })
        setProducts(newQuantities);
    };

    const deleteProduct = (id) => {
        const newProducts = products.filter(product => product.id !== id);
        setProducts(newProducts);
    };

    // const getPrice = (product) => (Number(product.precioHoy) * Number(product.quantity));

    const getTotal = (products) => {
        const total = products.reduce((total, product) => total += (product.precioHoy * product.quantity), 0)
        return total;
    };



    const closeCart = () => {
        const cart = document.querySelector('#cart')
        const btn = document.querySelector('#btn')
        cart && cart.classList.remove('move')
        btn && btn.classList.remove('move')
    }
    return (
        <div className="cart" id="cart">
            <i className="fas fa-times cursor-pointer" id="close" onClick={() => closeCart()}></i>
            {
                products.length === 0
                    ? null
                    : <h3 className="text-center mb-3 text-font">Productos</h3>
            }
            <div className="container-items-card">
                {products.length === 0
                    ? <p className="text-center text-font">No Hay elementos en el carrito</p>
                    : products.map((product) => (
                        <div className="cart-item" key={product.id}>
                            <div className="d-flex align-items-center gap-2">
                                <img src={product.img} alt="product-cart" className="img-cart-item" />
                                <div className="direction-column">
                                    <p className="m-0 text-cart-item text-font">{product.name}</p>
                                    <p className="m-0 price-cart-number text-font"><span className="price-cart-item text-font">
                                        {/* Precio:</span> ${getPrice(product)} */}
                                        Precio:</span> ${product.precioHoy}
                                    </p>
                                    <span className="quanty-cart text-font">Cantidad: </span>
                                    <input
                                        type="number"
                                        className="input-cart text-font"
                                        name="quanty input"
                                        value={product.quantity}
                                        min="1"
                                        onChange={(e) => handleChange(e.target.value, product.id)}
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-end quantity">
                                <i className="fas fa-trash cursor-pointer" onClick={() => deleteProduct(product.id)} />
                            </div>
                        </div>
                    ))}
            </div>


            <div className="container-total">
                {
                    products.length === 0
                        ? null
                        : <div className="totalCart">
                            <div className="d-flex justify-content-around box-total-cart">
                                <h2 className="text-center text-total-cart m-0 text-font ">Total</h2>
                                <div className="d-flex flex-column ">
                                    <span className="mt-2 text-font text-articles-cart"> <b>{products.length}</b> Artículo{products.length > 1 && "s"} en el carrito</span>
                                    <span className="text-font">Subtotal: <i className="fas fa-dollar-sign icon-dollar"></i><b className="text-font">{getTotal(products)}</b> </span>
                                </div>
                            </div>
                            <div className="text-center p-0 mt-2">
                                <Link to="/checkout"><button className="btn btn-success btn-shop-info p-2" id="btn" onClick={() => closeCart()}>Finalizar Pedido</button></Link>
                            </div>
                        </div>
                }
            </div>
        </div>

    );
}
export default Cart;
