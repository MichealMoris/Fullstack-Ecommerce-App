import ColorPicker from "./ColorPicker";
import ItemCounter from "./ItemCounter";
import ProductImageCard from "./ProductImageCard";
import StarRating from "./StarRating";
export default function ProductDetails() {
    return (
        <div className="row p-4">
            <ProductImageCard />
            <div className="col-6">
                <h3>IPhone 14 Pro Max</h3>
                <div style={{ marginTop: 10 + "px", marginBottom: 10 + "px" }}>
                    <span style={{ fontSize: 15 + "px" }}>Availability: </span>
                    <span style={{ fontSize: 15 + "px", color: "#e4573d" }}> 5 left in stock</span>
                </div>
                <div className="Progress-Bar-Container">
                    <div className="Progress-Bar" style={{ width: `36%` }}></div>
                </div>
                <div className="d-flex justify-content-start align-items-center" style={{ color: "#666", fontSize: 12 + "px", marginTop: 10 + "px", marginBottom: 10 + "px" }}>
                    <div className="me-4" style={{ marginTop: 8 + "px" }}>
                        <span>SKU: </span>
                        <span>111</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <StarRating rate={5} />
                        <span style={{ marginLeft: 6 + "px", marginTop: 5 + "px" }}>1 review</span>
                    </div>
                </div>
                <div className="product-price">
                    <p className="d-flex align-items-center" style={{ marginBottom: 0, paddingTop: 10 + "px", paddingBottom: 10 + "px" }}>
                        <span style={{ color: "#e4573d", fontWeight: 700, fontSize: 24 + "px", fontFamily: "CerebriSansBold" }}>$999.00</span>
                    </p>
                </div>
                <p style={{ marginTop: 15 + "px", marginBottom: 15 + "px" }} className="desc">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                <div className="d-flex align-items-center" style={{ marginTop: 35 + "px", marginBottom: 35 + "px" }}>
                    <span className="me-3" style={{ fontSize: 15 + "px" }}>Color: </span>
                    <ColorPicker />
                </div>
                <div className="d-flex" style={{ fontSize: 14 + "px", marginBottom: 35 + "px" }}>
                    <div className="product-options">
                        <i className="ti ti-ruler-pencil me-2"></i>
                        <span>Size Guide</span>
                    </div>
                    <div className="ms-4 me-4 product-options">
                        <i className="fa fa-truck me-2"></i>
                        <span>Shipping</span>
                    </div>
                    <div className="product-options">
                        <i className="ti ti-email me-2"></i>
                        <span>Ask About This Product</span>
                    </div>
                </div>
                <div className="container-fluid justify-content-between">
                    <div className="row">
                        <div className="col-3">
                            <ItemCounter />
                        </div>
                        <div className="col-6">
                            <button className="btn btn-dark product-buttons" style={{ width: 100 + "%" }}>Add To Cart</button>
                        </div>
                        <div className="col-1">
                            <button className="btn btn-dark product-buttons">
                                <i className="far fa-heart"></i>
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-dark product-button-two" style={{ width: 100 + "%" }}>Buy It Now</button>
                        </div>
                        <span style={{ fontSize: 12 + "px" }}>Guaranteed safe checkout</span>
                    </div>
                    <div className="mt-2">
                        <img className="me-2" src="https://drou-electronics-store.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/amazon-92e856f82cae5a564cd0f70457f11af4d58fa037cf6e5ab7adf76f6fd3b9cafe.svg" alt="" />
                        <img className="me-2" src="https://drou-electronics-store.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg" alt="" />
                        <img className="me-2" src="https://drou-electronics-store.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg" alt="" />
                        <img className="me-2" src="https://drou-electronics-store.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/bitcoin-e41278677541fc32b8d2e7fa41e61aaab2935151a6048a1d8d341162f5b93a0a.svg" alt="" />
                        <img className="me-2" src="https://drou-electronics-store.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/dankort-a92b320b417b7c123265e1e4fe134935ac76ec7e297be9b02a5ef76b182a29cc.svg" alt="" />
                        <img className="me-2" src="https://drou-electronics-store.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/google_pay-c66a29c63facf2053bf69352982c958e9675cabea4f2f7ccec08d169d1856b31.svg" alt="" />
                        <img className="me-2" src="https://drou-electronics-store.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg" alt="" />
                        <img className="me-2" src="https://drou-electronics-store.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg" alt="" />
                    </div>
                </div>
                <div className="mt-4">
                    <span style={{ fontSize: 13 + "px" }}>Share: </span>
                    <i className="fab fa-facebook-f ms-2 me-3" style={{ color: "#567fa9" }}></i>
                    <i className="fab fa-twitter me-3" style={{ color: "#26d0fe" }}></i>
                    <i className="fab fa-pinterest-p" style={{ color: "#DF0022" }}></i>
                </div>
            </div>
        </div>
    )
}