import React from 'react'
import { Link } from 'react-router-dom'

export default function LendingPage2() {
    return (
        <div>
            <div className="container lending-container2 p-5 d-flex align-items-center justify-content-between">
                <div className='lending-texts'>
                    <h4>New arrivals collection</h4>
                    <h1>iPhone Accessories</h1>
                    <p>
                        Snap on a case, wallet, wireless charger battery pack all <br />
                        accessories you're looking
                    </p>
                    <Link to={"/allproducts"}>
                        <button>Shop Now <i class="fa-solid fa-arrow-right-long"></i> </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
