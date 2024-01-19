import React from 'react'
import Categories from './Categories'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const logo = 'https://drou-electronics-store.myshopify.com/cdn/shop/files/logo_300x300.png?v=1674276674'
    return (
        <div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg p-3 bg-body-tertiary">
                    <div className="container">
                        <img src={logo} alt="Main Logo" className='main-logo' />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav navbar-links">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="test">HOME</a>
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
                                        BLOG
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="test">Blog Listing</a></li>
                                        <li><a className="dropdown-item" href="test">Blog Post</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="test" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PAGES
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="test">About Page</a></li>
                                        <li><a className="dropdown-item" href="test">Contact Page</a></li>
                                        <li><a className="dropdown-item" href="test">FAQ Page</a></li>
                                        <li><a className="dropdown-item" href="test">Privacy Policy Page</a></li>
                                        <li><a className="dropdown-item" href="test">404 Error Pages</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="test">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                        <div className='icons'>
                            <a href='test'><i className="far fa-search"></i></a>
                            <a href='test'><i className="far fa-heart"></i></a>
                            <Link to='/cart'>
                                <i className="far fa-shopping-bag position-relative">
                                    <span className='my-badge rounded-pill'>0</span>
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
