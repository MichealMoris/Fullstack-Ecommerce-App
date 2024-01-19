import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories() {
    return (
        <div>
            <div className='container p-3'>
                <div className="row electronics-row">
                    <div className='col-4'>
                        <h5>Smart Phone</h5>
                        <br />
                        <Link to='test'>Smart Watch</Link>
                        <Link to='test'>Computer</Link>
                        <Link to='test'>Airpods Pro</Link>
                        <Link to='test'>LCD Screen</Link>
                        <Link to='test'>LED Screen</Link>
                    </div>

                    <div className='col-4'>
                        <h5>Headphones</h5>
                        <br />
                        <Link to='test'>Airpods</Link>
                        <Link to='test'>Iphone</Link>
                        <Link to='test'>Windows Phones</Link>
                        <Link to='test'>Nokia Phone</Link>
                        <Link to='test'>Android</Link>
                    </div>

                    <div className='col-4'>
                        <h5>Apple MacBook</h5>
                        <br />
                        <Link to='test'>Laptop</Link>
                        <Link to='test'>Mac Book Pro</Link>
                        <Link to='test'>Speaker</Link>
                        <Link to='test'>Wired Earbuds</Link>
                        <Link to='test'>Tablet</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
