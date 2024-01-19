import { useState } from "react"
import PopularItem from "./PopularItem";

export default function PopularSection(props){
    const [active, setActive] = useState(0)
    const products = [
        {id: 0, img: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p10_large.jpg?v=1674275306", name: "DroSafe Charger", rate: 0, price: "$55.00", old: "$75.00", category: "accessories"},
        {id: 1, img: "https://drou-electronics-store.myshopify.com/cdn/shop/products/13_large.jpg?v=1674275345", name: "Drou watch ultra", rate: 4, price: "$70.00", old: "$85.00", category: "accessories"},
        {id: 2, img: "https://drou-electronics-store.myshopify.com/cdn/shop/products/12_large.jpg?v=1674275341", name: "DroPods max", rate: 4, price: "$55.00", old: "$75.00", category: "accessories"},
        {id: 3, img: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p8_523c97c7-2aa2-47e8-8b17-5a3c05a66db3_large.jpg?v=1674275335", name: "IPhone 14 pro max", rate: 5, price: "$999.00", old: "", category: "accessories"},
        {id: 4, img: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_large.jpg?v=1674275329", name: "IPhone 13 white color", rate: 5, price: "$110.00", old: "$130.00", category: "accessories"},
        {id: 5, img: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p1_large.jpg?v=1674275319", name: "UPad Pro black color", rate: 0, price: "$499.00", old: "$75.00", category: "accessories"},
        {id: 6, img: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p5_61c8ce6b-3afa-4276-a285-f98e4d5c7f67_large.jpg?v=1674275311", name: "Uphone lightning cable", rate: 0, price: "$70.00", old: "$85.00", category: "accessories"},
        {id: 7, img: "https://drou-electronics-store.myshopify.com/cdn/shop/products/11_c6c97b67-edac-48bd-8e5c-cf0de5e9e3cb_large.jpg?v=1674275302", name: "Homepod mini 2022", rate: 5, price: "$39.00", old: "$60.00", category: "accessories"},
    ]
    function onFilterClicked(index){
        setActive(index);
    }
    return (
        <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-end">
                <h2>Popular Products</h2>
                <ul className="filter-list mt-3">
                    <li className={active === 0 ? "active" : ""} onClick={() => {onFilterClicked(0)}}>Accessories</li>
                    <li className={active === 1 ? "active ms-4 me-4" : "ms-4 me-4"}  onClick={() => {onFilterClicked(1)}}>IPhone</li>
                    <li className={active === 2 ? "active" : ""}  onClick={() => {onFilterClicked(2)}}>Laptop</li>
                </ul>
            </div>
            {
                products.map((product) => {
                    return (
                        <div className="col-3 mt-4">
                            <PopularItem img={product.img} name={product.name} rate={product.rate} price={product.price} old={product.old} />
                        </div>
                    )
                })
            }
        </div>
    )
}