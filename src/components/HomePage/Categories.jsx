import React from 'react'

export default function Categories() {
    return (
        <div>
            <div className='container p-3'>
                <div className="row electronics-row">
                    <div className='col-4'>
                        <h5>Smart Phone</h5>
                        <br/>
                        <a href='test'>Smart Watch</a>
                        <a href='test'>Computer</a>
                        <a href='test'>Airpods Pro</a>
                        <a href='test'>LCD Screen</a>
                        <a href='test'>LED Screen</a>
                    </div>

                    <div className='col-4'>
                        <h5>Headphones</h5>
                        <br/>
                        <a href='test'>Airpods</a>
                        <a href='test'>Iphone</a>
                        <a href='test'>Windows Phones</a>
                        <a href='test'>Nokia Phone</a>
                        <a href='test'>Android</a>
                    </div>

                    <div className='col-4'>
                        <h5>Apple MacBook</h5>
                        <br/>
                        <a href='test'>Laptop</a>
                        <a href='test'>Mac Book Pro</a>
                        <a href='test'>Speaker</a>
                        <a href='test'>Wired Earbuds</a>
                        <a href='test'>Tablet</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
