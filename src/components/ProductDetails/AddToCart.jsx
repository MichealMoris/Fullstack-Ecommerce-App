import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddToCart({ product, color, size, setMessage, onRefresh }) {
    const [counter, setCounter] = useState(1)
    const decrement = () => {
        if(counter > 1){
            setCounter(counter - 1)
        }
    }
    const increment = () => {
        if(counter < product.product_stock){
            setCounter(counter + 1)
        }
    }

    async function addToCart(){

        onRefresh();
        setMessage();

        try {
            const response = await axios.post("http://localhost:8000/cart", {
                product_id: product.id,
                product_image: product.product_main_img,
                product_name: product.product_name,
                product_size: size,
                product_color: color,
                product_price: product.product_current_price,
                product_quantity: counter
            });  
        } catch (error) {
            console.error(error);
        } 

    }

    return (
        <div className="container-fluid justify-content-between">
            <div className="row" style={{ justifyContent: "start" }}>
                <div className="col-1">
                    <button className="btn btn-dark product-buttons">
                        <i className="far fa-heart"></i>
                    </button>
                </div>
                <div className="col-6">
                    <button className="btn btn-dark product-buttons " style={{ width: 100 + "%" }} onClick={() => {addToCart()}}>Add To Cart</button>
                </div>
                <div className="col-3">
                    <div className="border rounded d-flex justify-content-between p-2" >
                        <span style={{ cursor: "pointer", fontFamily: "CerebriSansBold" }} onClick={() => { decrement() }}>-</span>
                        <span style={{ fontFamily: "CerebriSansBold" }}>{counter}</span>
                        <span style={{ cursor: "pointer", fontFamily: "CerebriSansBold" }} onClick={() => { increment() }}>+</span>
                    </div>
                </div>
            </div>
            <div className="row" style={{ justifyContent: "start" }}>
                <div className="col-10">
                    <button className="btn btn-dark product-button-two" style={{ width: 100 + "%" }}>Buy It Now</button>
                </div>
                <span style={{ fontSize: 12 + "px" }}>Guaranteed safe checkout</span>
            </div>
        </div>
    )
}