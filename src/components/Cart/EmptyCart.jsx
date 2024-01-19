import { Link } from "react-router-dom";
export default function EmptyCart() {
    return (
        <div className="row align-content-center text-center" style={{ height: 100 + "vh" }}>
            <div className="col">
                <h2>Shopping Cart is Empty.</h2>
                <img src="https://cdn.shopify.com/s/files/1/0132/3116/1408/files/cart.png?13612" className="img-fluid mt-5" style={{ width: 100 + "px" }} />
                <p className="mt-4">You Have No Items In Your Shopping Cart.</p>
                <p className="mt-4">
                    <Link to="/" className="custom-text">
                        <i className="fa fa-angle-left me-1"></i>
                        Continue Shopping
                    </Link>
                </p>
            </div>
        </div>
    )
}