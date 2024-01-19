import React from 'react'
import { Link } from 'react-router-dom'
import AllProductsCategory from './AllProductsCategory'

export default function AllProducts() {
    return (
        <div className='container'>
            <div className="row align-content-center" style={{ height: 10 + "vh", background: "#f4f4f4" }}>
                <div className="col">
                    <Link to="/" style={{ color: "#666", textDecoration: "none" }}>Home</Link>
                    <span className="ms-3 me-3">/</span>
                    <span style={{ color: "#e52e06" }}>Categories</span>
                </div>
            </div>
            <AllProductsCategory headTitle={'Accessories'} />
            <AllProductsCategory headTitle={'Phones'} />
            <AllProductsCategory headTitle={'Watches'} />
            <AllProductsCategory headTitle={'Tablets'} />
            <AllProductsCategory headTitle={'Laptops'} />
            <AllProductsCategory headTitle={'Screens'} />
        </div>
    )
}
