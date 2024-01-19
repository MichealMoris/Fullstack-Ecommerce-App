import { Link } from "react-router-dom"
import { useState } from "react"
export default function CartItem({ product }) {
    const [counter, setCounter] = useState(1)
    const increment = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }
    const decrement = () => {
        setCounter(counter + 1)
    }
    return (
        <tr>
            <td>
                <img className='img-fluid' src={product.image} />
            </td>
            <td style={{ width: "fit-content" }}>
                <Link to={product.link} style={{ textDecoration: "none", fontFamily: "CerebriSansBold", color: "#333" }}>{product.name}</Link><br />
                <span style={{ color: "#888", fontSize: 14 + "px" }}>{product.size} / {product.color}</span>
            </td>
            <td style={{ fontFamily: "CerebriSansBold" }}>${product.price}</td>
            <td>
                <div className="border rounded d-flex justify-content-between p-2" >
                    <span style={{ cursor: "pointer", fontFamily: "CerebriSansBold" }} onClick={() => { increment() }}>-</span>
                    <span style={{ fontFamily: "CerebriSansBold" }}>{counter}</span>
                    <span style={{ cursor: "pointer", fontFamily: "CerebriSansBold" }} onClick={() => { decrement() }}>+</span>
                </div>
            </td>
            <td style={{ fontFamily: "CerebriSansBold" }}>${product.price * counter}</td>
            <td>
                <a href="" className="delete-icon">
                    <i className="far fa-times"></i>
                </a>
            </td>
        </tr>
    )
}