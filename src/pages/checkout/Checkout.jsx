import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Checkout.css'

const Checkout = ({ products }) => {


    const [show, setShow] = useState(true)

    const getTotal = (products) => {
        const totalCart = products.reduce((total, product) => total += (product.precioHoy * product.quantity), 0)
        return totalCart
    }

    //State para leer los campos del formulario
    const [data, setData] = useState({
        name: '',
        lastName: '',
        addres: '',
        phone: '',
        neighborhood: "",
        city: ''
    })

    //State para mostrar error
    const [error, setError] = useState(false)
    //Funcion para guardar datos del cliente
    const saveData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    //Extraer valores del form 
    const { name, lastName, addres, phone, neighborhood, city } = data

    const submitData = (products) => {

        //Validar Form

        if (name.trim() === '' || lastName.trim() === '' || addres.trim() === '' || phone.trim() === '' || neighborhood.trim() === '') {
            setError(true)
            return
        } else {

        }
        setError(false)

        const phoneWa = "573023484230";
        const totalCart = products.reduce((total, product) => total += (product.precioHoy * product.quantity), 0)

        const listText = products.map((product) => `Nombre: ${product.name} - Cantidad: ${product.quantity}%0A`).join('')

        const url = `https://api.whatsapp.com/send?phone=${phoneWa}&text=
        Hola, ${name} ${lastName} Bienvenido a Milacam! 🐾 %0ATus productos son:%0A══════════════════%0A${listText}══════════════════%0ADirección: ${addres}%0ABarrio: ${neighborhood}%0ACiudad: ${city}%0ACelular: ${phone}%0A%0A*TOTAL:* $${totalCart}`;

        window.open(url);


        //Reinciar form
        setData({
            name: '',
            lastName: '',
            addres: '',
            phone: '',
            neighborhood: "",
            city: ''
        })   
    }
    return (
        <>
            <div className="box-logo d-flex flex-wrap align-items-center">
                <Link to="/"><img src="../../assets/img/logoBlack.png" alt="logo" /></Link>
                <p className="text-cart-shop">Carrito de compras <br />
                    <span className="text-cart-shop2">Finaliza tu compra</span></p>
            </div>
            <div className="container-checkout d-flex flex-wrap justify-content-around">
                <div className="container-checkout_data">
                    <div className="box-number d-flex align-items-center mb-4">
                        <div className="box-data-addres d-flex justify-content-center align-items-center">
                            <span className="text-center data-number">1</span>
                        </div>
                        <p className="text-addres">Dirección de Envío</p>
                    </div>
                    <form>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <label htmlFor="" className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Nicolás"
                                    onChange={saveData}
                                    value={name}
                                />
                            </div>
                            <div className="col-12 col-md-6 addresInput">
                                <label htmlFor="" className="form-label">Apellido</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="form-control"
                                    placeholder="Sanchez"
                                    onChange={saveData}
                                    value={lastName}

                                />
                            </div>
                            <div className="col-12 col-md-6 mt-3">
                                <label htmlFor="" className="form-label">Dirección</label>
                                <input
                                    type="street-address"
                                    className="form-control"
                                    name="addres"
                                    placeholder="Cra 1 8-52"
                                    onChange={saveData}
                                    value={addres}

                                />
                            </div>
                            <div className="col-12 col-md-6 mt-3">
                                <label htmlFor="" className="form-label">Celular</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name='phone'
                                    placeholder="3023484230"
                                    onChange={saveData}
                                    value={phone}
                                />
                            </div>

                        </div>
                        <div className="row mt-3">
                            <div className="col-12 col-md-6 ">
                                <label htmlFor="" className="form-label">Barrio</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Santo Domingo"
                                    name="neighborhood"
                                    onChange={saveData}
                                    value={neighborhood}

                                />
                            </div>
                            <div htmlFor="" className="col-12 col-md-6 mt-3">
                                <label
                                    className="form-label"
                                >Ciudad</label>
                                <select
                                    name="city"
                                    onChange={saveData}
                                    value={city}
                                    className="form-select">
                                    <option value="Facatativá">Facatativá</option>
                                    <option value="Bogota">Bogota</option>
                                    <option value="Cali">Cali</option>
                                    <option value="Medellin">Medellin</option>
                                    <option value="Cali">Cali</option>
                                </select>
                            </div>
                        </div>
                        {
                            error ? <p className="error-mesage mt-4">Todos los campos son obligatorios</p> : null
                        }
                    </form>
                </div>
                <div className="container-checkout_shopping">
                    <div className="box-number d-flex align-items-center mb-4">
                        <div className="box-data-addres d-flex justify-content-center align-items-center">
                            <span className="text-center data-number">2</span>
                        </div>
                        <p className="text-addres">Resumen de Pedido</p>
                    </div>

                    <div className="box-order d-flex justify-content-center">
                        <p className="text-center text-order cursor-pointer d-block m-0"
                            onClick={() => setShow(!show)}>{products.length} Producto{products.length > 1 && "s"} en tu carrito
                            <i className={`fas fa-chevron-${show ? "up" : "down"}`} />
                        </p>
                    </div>
                    <hr />
                    <div className="container-items_subtotal" id="show">
                        {
                            show && products.map((product) => (
                                <div className="d-flex direction-column align-items-center mb-2" key={product.id}>
                                    <img src={product.img} alt="img" className="img-receipt" />
                                    <span>{product.name} <br /><span>Cantidad: {product.quantity}</span></span>
                                </div>

                            ))
                        }
                        <hr />
                    </div>
                    <div className="container-items-total">
                        <div className="box-total d-flex justify-content-between">
                            <span className="text-subtotal">Subtotal del carrito</span>
                            <span className="subtotal-price"><i className="fas fa-dollar-sign dollar-total" />{getTotal(products)}</span>
                        </div>
                        <div className="box-total d-flex justify-content-between mt-3">
                            <span className="text-subtotal">Envio</span>
                            <span className="subtotal-price"><i className="fas fa-dollar-sign dollar-total" />0</span>
                        </div>
                        <div className="box-total d-flex justify-content-between mt-3">
                            <span className="text-subtotal">Impuestos</span>
                            <span className="subtotal-price"><i className="fas fa-dollar-sign dollar-total" />0</span>
                        </div>
                        <div className="box-total d-flex justify-content-between mt-3">
                            <span className="text-total">Total de tu Compra</span>
                            <span className="total-price"><i className="fas fa-dollar-sign dollar-total" />{getTotal(products)}</span>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <button className="btn btn-success btn-shop-info mb-2"
                                id="submit"
                                onClick={() => submitData(products)}

                            // onClick={(e) => sendOrder(e.preventDefault(), products)}
                            >
                                <i className="fas fa-shopping-cart cart-info" />Realizar Pedido
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Checkout

