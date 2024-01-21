import React, { useEffect, useState } from 'react';
import './favoritecard.css'
import { Link } from 'react-router-dom';
function FavoriteCard(props) {
    const imglink = "https://drou-electronics-store.myshopify.com/cdn/shop/products/13_1024x1024_crop_center.jpg?v=1674275345"
    const [color, setcolor] = useState("#e52e06")
    const change = () => {
        if (color == "#e52e06") {
            setcolor("gray");
        } else if (color == "gray") {
            setcolor("#e52e06")
        }

    }
    useEffect(() => {
        document.getElementById("heart").style.backgroundColor = color;

    }, [color])

    return (
        <div className='facard mt-5 col-3'>
            <div className="card-img w-100 h-75">
                <Link className="p-0" to="">
                    <img src={imglink} alt="favourite item" className='w-100 h-100' />
                    <a className='heart' id='heart' onClick={() => change()}><i class="bi bi-heart text-light fs-6"></i></a>
                </Link>

            </div>

            <div className="card-text py-2">
                <p className=''> Home entertainment</p>
                <p className=''> $79.00 <del className=' ms-2 text-secondary'>$898</del></p>
            </div>


        </div>
    );
}

export default FavoriteCard;