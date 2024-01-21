import React from 'react'
import Categories from './Categories'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Navbar({data, setRefreshedData}) {
    const logo = 'https://drou-electronics-store.myshopify.com/cdn/shop/files/logo_300x300.png?v=1674276674'
    const [cartCount, setCartCount] = useState(0);
    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:8000/cartCount");
            const data = response.data["data"][0]["COUNT(*)"];
            setCartCount(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        
    }

    useEffect(() => {
        fetchData();
    }, [cartCount])

    if(data){
        fetchData();
        setRefreshedData();
    }

    return (
        <div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg p-3 bg-body-tertiary">
                    <div className="container-fluid">
                        <img src={logo} alt="Main Logo" className='main-logo' />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav navbar-links">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">HOME</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="test" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ELECTRONICS
                                    </a>
                                    <ul className="dropdown-menu" style={{ width: '100vh' }}>
                                        <Categories />
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="test" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PAGES
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/about">About Page</Link></li>
                                        <li><Link className="dropdown-item" to="/contact">Contact Page</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/contact">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='icons'>
                            <a href='test'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <Link to='/favorites'>
                                <i className="far fa-heart"></i>
                            </Link>

                            <Link to='/cart'>
                                <i class="fa-solid fa-cart-shopping position-relative">
                                    <span className='my-badge rounded-pill'>{cartCount}</span>
                                </i>
                            </Link>
                        </div>
                        <div className='login-signup'>
                            <Link to="/account/login">Log In</Link>
                            <span>/</span>
                            <Link to="/account/register">Sign Up</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
