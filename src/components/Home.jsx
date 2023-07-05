import React from 'react'
import Product from './product'

export default function Home() {
    return (
        <div className='hero my-0 py-0'>
            <div className="card bg-dark text-blue border-0 ">
                <img src="/assets/bg.jpeg" className="card-img" alt="Background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-o">New Season Arrivals</h5>
                        <p className="card-text">Check Out our New Products</p>
                    </div>
                </div>
                <div>
                    <Product />
                </div>
            </div>

        </div>
    )
}
