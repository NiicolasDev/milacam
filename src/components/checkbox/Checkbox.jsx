import React from 'react'
// import { data } from 'api/data'
import './Checkbox.css'
// import Product from 'components/product/Product'

export const Checkbox = ({ label, subItem = false, name, checked, setChecked }) => {


        //1-Almacenar checkeds en true y los false eliminarlos
        const handleChange = (e) => {
           const {name} = e.target
            // console.log('nombre', name, 'bolean', e.target.checked)
            //Agregando los que sean True
            if(e.target.checked){
                setChecked([
                    ...checked,
                    name
                ])
            }else{
                //Eliminado los que son false
                const items = checked.filter( item => item !== name )
                setChecked(items)
            }
        }

    // const nombres = [
    //     'nicolas', 'camilo', 'sandriu'
    // ]
    // const arraydos = [
    //     { nombre: 'rudo', edad: 50 },
    //     { nombre: 'gorsh', edad: 70 },
    //     { nombre: 'vivian', edad: 20 },
    // ]
    // const menores = arraydos.filter(item => item.edad <= 50)
    // console.log(menores)

  
        // const nombres = arraytercer.map( name => name.nombre)

    // const edades = [
    //     10, 20, 30
    // ]
    // console.log(edades.filter( edad => edad <= 20))

    // const bolean = [
    //     true, true, false
    // ]
    // console.log(bolean.filter(f => f === false))

  
    // console.log(gay)


    // const delet = nombres.filter(nombre => nombre !== 'sandriu')
    // console.log(delet) 

    return (
        <div className={`checkbox-${subItem ? 'subItem' : 'Item'}`}>
            <input type="checkbox"
                onChange={handleChange}
                name={name}
            />
            <label className="label-name">{label}</label>
        </div>
    )
}







// const handleChange = (e) => {
//     if (e.target.checked) {
//         setChecked([
//             ...checked,
//             name
//         ])
//     } else {
//         const items = checked.filter(item => item !== name)
//         setChecked(items)
//     }
// }