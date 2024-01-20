import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AllProductsCategory from './AllProductsCategory'
import axios from 'axios';

export default function AllProducts() {

    const [products, setProducts] = useState([]);
    const accessories = products.filter((product) => {
        return product.product_category == "accessories";
    })
    const phones = products.filter((product) => {
        return product.product_category == "phones";
    })
    const headphones = products.filter((product) => {
        return product.product_category == "headphones";
    })
    const laptops = products.filter((product) => {
        return product.product_category == "laptops";
    })
    const tablets = products.filter((product) => {
        return product.product_category == "tablets";
    })
    const screens = products.filter((product) => {
        return product.product_category == "screens";
    })

    async function fetchData() {
        const response = await axios.get("http://127.0.0.1:8000/products");
        setProducts(response.data);
    }

    
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='container-fluid'>
            <div className="row align-content-center" style={{ height: 10 + "vh", background: "#f4f4f4" }}>
                <div className="col">
                    <Link to="/" style={{ color: "#666", textDecoration: "none" }}>Home</Link>
                    <span className="ms-3 me-3">/</span>
                    <span style={{ color: "#e52e06" }}>Categories</span>
                </div>
            </div>
            <AllProductsCategory headTitle={'Accessories'} products={accessories} />
            <AllProductsCategory headTitle={'Headphones'} products={headphones} />
            <AllProductsCategory headTitle={'Phones'} products={phones}/>
            <AllProductsCategory headTitle={'Laptops'} products={laptops}/>
            <AllProductsCategory headTitle={'Tablets'} products={tablets}/>
            <AllProductsCategory headTitle={'Screens'} products={screens} />
        </div>
    )
}
