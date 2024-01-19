import React from "react";
import Card from "./Card";


export default function PopularProduct() {
    const product = [
        { id: 1, title: "Drou watch ultra", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p4_b019dfc8-3740-44ac-8916-6db66a336feb_large.jpg?v=1674275345", oldprice: 3456, newprice: 7878, rate: 4 },
        { id: 2, title: "DrouPods max", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p6_large.jpg?v=1674275329", oldprice: 34560, newprice: 78787, rate: 5 },
        { id: 3, title: "DrouPods max", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p10_78f5d5ed-818a-4a91-88a1-433a7f408c84_large.jpg?v=1674275341", oldprice: 346, newprice: 78768, rate: 3 },
        { id: 4, title: "DrouPods max", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_36d931d4-1ef2-4c82-9a65-80426fb77f21_large.jpg?v=1674275335", oldprice: 346, newprice: 78768, rate: 2 },
        { id: 5, title: "DrouPods max", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p2_large.jpg?v=1674275320", oldprice: 346, newprice: 78768, rate: 5 },
        { id: 6, title: "DrouPods max", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p5_020e3c58-9f57-4388-b8d8-bb40db3b4c5e_large.jpg?v=1674275306", oldprice: 346, newprice: 78768, rate: 3 },
        { id: 7, title: "DrouPods max", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/12_1024x1024_crop_center.jpg?v=1674275341", oldprice: 346, newprice: 78768, rate: 4 },
        { id: 8, title: "DrouPods max", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p3_0dd10fdb-44b3-415b-b7c3-91896ecb3ee2_large.jpg?v=1674275302", oldprice: 346, newprice: 78768, rate:1 }
    ];
    return (

        <div className="container-fluid " style={{ marginTop: "40px",marginBottom:"90px" }}>
           
            <div className="title row justify-content-between align-items-center ">

            <div className=" col-1 col-md-2 col-lg-3  mt-2 mb-5 ms-5">
                    <a className="links selected">Acesories </a>
                    <a className="links">iphone </a>
                    <a className="links">Laptop </a>

                </div>
                <div className="col-7">
                    <h2 className="mt-2 mb-5 ">Popular Product</h2>
                </div>
                

            </div>
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-4 row-cols-sm-3 row-cols-lg-5 gap-4  justify-content-center  mt-5" >
                    {
                        product.map((item) => {
                            return (
                                <Card product={item} />
                            )

                        })
                    }

                </div>


            </div>


        </div>

    )
}