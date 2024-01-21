import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import CartTable from "./CartTable";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Cart({onRefresh}) {
    const [cart, setCart] = useState([]);
    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:8000/cart");
            const data = response.data["data"];
            setCart(Object.values(data));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    
    fetchData();
    return (
        <div className="container-fluid bg-white">
            <div className="row align-content-center p-5" style={{ height: 10 + "vh", background: "#f4f4f4" }}>
                <div className="col">
                    <Link to="/" style={{color: "#666", textDecoration: "none"}}>Home</Link>
                    <span className="ms-3 me-3">/</span>
                    <span style={{ color: "#e52e06" }}>Your Shopping Cart</span>
                </div>
            </div>
            {
                
                 cart.length > 0 ? <CartTable cart={cart} onRefresh={onRefresh}/> : <EmptyCart />
            }
        </div>
    )
}