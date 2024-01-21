import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
export default function CartItem({ product}) {
    const [counter, setCounter] = useState(product.quantity)
    const increment = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }
    const decrement = () => {
        setCounter(counter + 1)
    }

    async function deleteItem(id) {
        try {
            const response = await axios.delete(`http://localhost:8000/cart/${id}`)
            console.log(response);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <tr>
            <td>
                <img className='img-fluid' src={product.image} />
            </td>
            <td style={{ width: "fit-content" }}>
                <Link to={product.link} className="product-name-custom" style={{ }}>{product.name}</Link><br />
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
                <a className="delete-icon" onClick={() => {
                    
                    deleteItem(product.id)
                    product.onRefresh()
                }}>
                    <i className="bi bi-x"></i>
                </a>
            </td>
        </tr>
    )
}