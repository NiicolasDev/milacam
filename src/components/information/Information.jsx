import React from 'react'
import './Information.css'

const Information = () => {
    return (
        <section className="container-information">
                <img src="./assets/img/logoBlack.png" alt="" />
                <p className="m-0">Avenidad Caracas N° 73-39</p>
                <p className="m-0">Bogota D.C Colombia</p>
                <p className="mb-1">Tel 01 80000 911 295</p>
                <div className="box-icons d-flex  justify-content-center align-items-center container-info">
                    <p className="title-info m-0">Encuetranos en: </p>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-whatsapp"></i>
                </div>
        </section>
    )
}

export default Information
