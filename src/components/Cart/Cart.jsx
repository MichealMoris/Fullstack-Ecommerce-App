import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import CartTable from "./CartTable";

export default function Cart() {
    return (
        <div className="container-fluid">
            <div className="row align-content-center p-5" style={{ height: 10 + "vh", background: "#f4f4f4" }}>
                <div className="col">
                    <Link to="/" style={{color: "#666", textDecoration: "none"}}>Home</Link>
                    <span className="ms-3 me-3">/</span>
                    <span style={{ color: "#e52e06" }}>Your Shopping Cart</span>
                </div>
            </div>
            {/* <EmptyCart /> */}
            <CartTable />
        </div>
    )
}