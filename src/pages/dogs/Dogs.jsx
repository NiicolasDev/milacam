import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Brand from "components/brand/Brand";
import Information from "components/information/Information";
import { Checkbox } from 'components/checkbox/Checkbox';
import { data, categories, brands, sizes, ages } from 'api/data'
import Product from 'components/product/Product';
import './Dogs.css'


const Dogs = ({ productsCart, setProductsCarts, setProductInformation }) => {

    const [products, setProduct] = useState(data)
    const [checked, setChecked] = useState([])

    // console.log('arreglo original', products)
    // console.log('el checked',checked)
    useEffect(() => {
        const filterProducts = data.filter(product => {
            const categories = checked.find(item => item.includes(product.categories));
            // console.log(categories)
            if (categories !== undefined) {
                return true
            } else {
                return false
            }
        })

        if (filterProducts.length > 0) {
            setProduct(filterProducts)
            // console.log('Arreglo con filtro', filterProducts)
        } else {
            setProduct(data)
        }
    }, [checked])
    // console.log('arreglo Final', products)

    return (
        <>
            <div className="container-info-dog">
                <div className="box-link-home">
                    <Link to="/" className="home-link">Inicio</Link> <span className="dog-link"><i className="fas fa-chevron-right arrow-right" /> Perros</span>
                </div>
                <div className="box-title-section">
                    <h3 className="title-dog-sec">Perros</h3>
                </div>
            </div>
            <button className="btn btn-success p-2 btn-filter" id="btn">Filtrar</button>
            <div className="container-dogs d-flex">
                <div className="container-dogs-filter">
                    <h3 className="mt-2 mb-1 text-filter_dog"><i className="fas fa-paw paw" /> Categoria</h3>
                    <div className="container-categories">
                        {
                            categories.map((item, index) => <Checkbox
                                label={item.label}
                                name={item.name}
                                subItem={item.subItem}
                                setProduct={setProduct}
                                checked={checked}
                                setChecked={setChecked}
                                key={index} />)
                        }
                    </div>
                    <hr />
                    <h3 className="mt-4 mb-1 text-filter_dog"><i className="fas fa-paw paw" /> Marca</h3>
                    <div className="container-categories">
                        {
                            brands.map((brand, index) => <Checkbox
                                label={brand.label}
                                subItem={brand.subItem}
                                setProduct={setProduct}
                                checked={checked}
                                setChecked={setChecked}
                                key={index} />)
                        }
                    </div>
                    <hr />
                    <h3 className="mt-4 mb-1 text-filter_dog"><i className="fas fa-paw paw" />  Tamaño</h3>
                    <div className="container-categories">
                        {
                            sizes.map((size, index) => <Checkbox
                                label={size.label}
                                subItem={size.subItem}
                                setProduct={setProduct}
                                checked={checked}
                                setChecked={setChecked}
                                key={index} />)
                        }
                    </div>
                    <hr />

                    <h3 className="mt-4 mb-1 text-filter_dog"><i className="fas fa-paw paw" />  Edad</h3>
                    <div className="container-categories">
                        {
                            ages.map((age, index) => <Checkbox
                                label={age.label}
                                subItem={age.subItem}
                                setProduct={setProduct}
                                checked={checked}
                                setChecked={setChecked}
                                key={index} />)
                        }
                    </div>

                </div>


                <div className="container-dogs-products d-flex justify-content-center flex-wrap gap-4">
                    {
                        products.filter(productF => productF.dog).map((product) =>
                            <Product
                                key={product.id}
                                product={product}
                                setProductsCarts={setProductsCarts}
                                productsCart={productsCart}
                                setProductInformation={setProductInformation}
                            />)
                    }

                </div>
            </div>
            <Brand />
            <Information />

        </>

    );
}

export default Dogs;


// devuelva los que tengan estas categorias
// const keys = ['snacks', 'food', 'cookies']

// const productoss = [{
//     "img": "../assets/img/product11.jpg",
//     "name": "pelota gato Treal ball2",
//     "precioHoy": 500.000,
//     "precioNormal": 700.00,
//     "categories": "chunks",
//     "cat": true,
//     "id": 2
// },
// {
//     "img": "../assets/img/product2.jpg",
//     "name": "Chunky Perros Cachorros",
//     "precioHoy": 500000,
//     "precioNormal": 700000,
//     "categories": "cookies",
//     "discount": true,
//     "dog": true,
//     "id": 3
// },
// {
//     "img": "../assets/img/product2.jpg",
//     "name": "Chunky Perros Cachorros",
//     "precioHoy": 500000,
//     "precioNormal": 700000,
//     "categories": "snacks",
//     "discount": true,
//     "dog": true,
//     "id": 3
// },
// ]

// const filter = productoss.filter( product => {
//     const keysF = keys.find(key => key === product.categories)
//     if(keysF !== undefined){
//         return true
//     }else{
//         return false
//     }
// })
// console.log('Arreglo de filter',filter)
// console.log('categories',keys)

//====================================Ayudaa==========================================
// const productfff ={
//     name : 'food'
// }
// const find = keys.find( key => key === productfff.name)
// console.log(find)
//Si lo encuentra devuelve el name  //// si no lo encuentra devuelve undefine
// console.log(keys)
// console.log(productoss)
//====================================Ayudaa==========================================

// const result = [];
//BOCATO
// const keys = ['snacks', 'food', 'cookies']

// const llaves = Object.values(keys)
// console.log(llaves)

// const save = keys.map(key => key)
// console.log('lllabes', save)

// const productoss3 = [{
//     "img": "../assets/img/product11.jpg",
//     "name": "pelota gato Treal ball2",
//     "precioHoy": 500.000,
//     "precioNormal": 700.00,
//     "categories": ["chunks"],
//     "cat": true,
//     "id": 2
// },
// {
//     "img": "../assets/img/product2.jpg",
//     "name": "Chunky Perros Cachorros",
//     "precioHoy": 500000,
//     "precioNormal": 700000,
//     "categories": ["cookies"],
//     "discount": true,
//     "dog": true,
//     "id": 3
// },
// {
//     "img": "../assets/img/product2.jpg",
//     "name": "Chunky Perros Cachorros",
//     "precioHoy": 500000,
//     "precioNormal": 700000,
//     "categories": ["snacks"],
//     "discount": true,
//     "dog": true,
//     "id": 3
// },
// ]

// const filterrs = productoss3.filter(product => {
//     const resultado2 = keys.find(k => k.includes(product.categories))
//     if (resultado2 !== undefined) {
//         return true
//     } else {
//         return false
//     }
// })
// console.log(filterrs)

// const resultado = productoss3.some( product => {
//     const prodcut = product.categories.includes(keys)
//     console.log('yes', prodcut)
//     console.log('objecto', product)
// })

// const filter = productoss3.filter(product => {

// })

// console.log(prod.categories)
// const filter = productoss3.filter( product => {
//     const resultado = keys.find( key => key === include(product.categories))

//  })
// const resultado = keys.find( key => key === prod.categories)
// console.log('array', resultado)




// console.log(Object.values(prod.categories))
// console.log('array con filter', filter)
// console.log('categories' ,keys)

// const arraytercer = [
//     { nombre: 'rudo', edad: 50, gay: true },
//     { nombre: 'gorsh', edad: 70, gay: false },
//     { nombre: 'vivian', edad: 20, gay: false },
// ]

// const gay2 = arraytercer.filter((lombana)=>lombana.gay===true)
// const gay = arraytercer.filter(lombana => {
//     if(lombana.gay===true){
//         return true;
//     }else{
//         return false;
//     }
// })





//==============EJERCICIO FINAL ==================

// const keys = ['snacks', 'food', 'chunky']


// const productoss3 = [{
//     "img": "../assets/img/product11.jpg",
//     "name": "pelota gato Treal ball2",
//     "precioHoy": 500.000,
//     "precioNormal": 700.00,
//     "categories": ['snacks', 'food', 'chunky'],
//     "cat": true,
//     "id": 2
// },
// {
//     "img": "../assets/img/product2.jpg",
//     "name": "Chunky Perros Cachorros",
//     "precioHoy": 500000,
//     "precioNormal": 700000,
//     "categories": ['snacks', 'food', 'chunky'],
//     "discount": true,
//     "dog": true,
//     "id": 3
// },
// {
//     "img": "../assets/img/product2.jpg",
//     "name": "Chunky Perros Cachorros",
//     "precioHoy": 500000,
//     "precioNormal": 700000,
//     "categories": ['snacks', 'food', 'chunky'],
//     "discount": true,
//     "dog": true,
//     "id": 3
// },
// ]

// const filterrs = productoss3.filter(product => {
//     const result2 = keys.find(c => {
//         const result3 = product.categories.find(p => p === c)
//         console.log(result3)
//         if (result3 !== undefined) {
//             return true
//         } else {
//             return false
//         }
//     })
// })
// console.log(filterrs)
