import React from 'react'
import { Link } from 'react-router-dom'

export default function LendingPage() {

    return (
        <div>
            <div className="container lending-container p-5 d-flex align-items-center justify-content-between">
                <div className='lending-texts'>
                    <h4>Sale Up to 30% off</h4>
                    <h1>Apple Watch Series</h1>
                    <p>Feature Packed at a better value than ever Powerful sensors to <br /> monitor your fitness</p>
                    <Link to={"/allproducts"}>
                        <button>Shop Now <i class="fa-solid fa-arrow-right-long"></i> </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
