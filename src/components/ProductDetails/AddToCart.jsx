import ItemCounter from "./ItemCounter";
export default function AddToCart({product}) {
    return (
        <div className="container-fluid justify-content-between">
            <div className="row" style={{ justifyContent: "start" }}>
                <div className="col-1">
                    <button className="btn btn-dark product-buttons">
                        <i className="far fa-heart"></i>
                    </button>
                </div>
                <div className="col-6">
                    <button className="btn btn-dark product-buttons" style={{ width: 100 + "%" }}>Add To Cart</button>
                </div>
                <div className="col-3">
                    <ItemCounter max={product.product_stock} />
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