import React from 'react'
import { Link } from 'react-router-dom'

export default function NoFavorite() {
    return (
        <div className='container'>
            <div className="row align-content-center" style={{ height: 10 + "vh", background: "#f4f4f4" }}>
                <div className="col">
                    <Link to="/" style={{ color: "#666", textDecoration: "none" }}>Home</Link>
                    <span className="ms-3 me-3">/</span>
                    <span style={{ color: "#e52e06" }}>Favorites</span>
                </div>
            </div>

            <div className='container mt-5 d-flex align-bottom flex-column '>
                <h1 className='mt-5 text-start text-secondary'>
                    You have not added any favorites yet!
                </h1>
                <Link to="/allproducts" style={{ color: "#666", textDecoration: "none" }}>
                    <h6 className='mt-4 mb-5'>Continue browsing here.</h6>
                </Link>
            </div>
        </div>
    )
}
