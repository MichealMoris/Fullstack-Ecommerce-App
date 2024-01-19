import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";


export default function LatestProduct() {
    const product = [
        { id: 1, title: "Drou watch ultra", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p4_b019dfc8-3740-44ac-8916-6db66a336feb_large.jpg?v=1674275345", oldprice: 3456, newprice: 7878, rate: 3 },
        { id: 2, title: "DrouPods max", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p6_large.jpg?v=1674275329", oldprice: 34560, newprice: 78787, rate: 5 },
        { id: 3, title: "DrouPods max", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p10_78f5d5ed-818a-4a91-88a1-433a7f408c84_large.jpg?v=1674275341", oldprice: 346, newprice: 78768, rate: 4 },
        { id: 4, title: "DrouPods max", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_36d931d4-1ef2-4c82-9a65-80426fb77f21_large.jpg?v=1674275335", oldprice: 346, newprice: 78768, rate: 5 },
        { id: 5, title: "DrouPods max", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p2_large.jpg?v=1674275320", oldprice: 346, newprice: 78768, rate: 3 }
    ]
    return (
        <div className="container-fluid p-5">
            <div className="title row justify-content-evenly align-items-center">

                <div className=" col-2 mt-2 mb-5 links">
                    <Link to="/allproducts" style={{textDecoration: 'none', color:'black', fontWeight:'bold'}}>View All Product <i class="bi bi-arrow-right"></i></Link>
                </div>
                <div className="col-10">
                    <h2 className="mt-2 mb-5 ">Latest Product</h2>
                </div>


            </div>
            <div className="container-fluid">
                <div id="carouselExampleControls" class="carousel slide m-auto carousel-dark" >
                    <div class="carousel-inner" style={{ height: "450px" }}>
                        <div class="carousel-item active w-100 ">
                            <div className="row row-cols-1 row-cols-md-5 row-cols-sm-3 row-cols-lg-6 gap-4  justify-content-center  mt-2" style={{ height: "350px" }}>
                                {
                                    product.map((item) => {
                                        return (
                                            <Card product={item} />
                                        )
                                    })
                                }
                            </div>

                        </div>
                        <div class="carousel-item w-100 h-100">
                            <div className="row row-cols-1 row-cols-md-5 row-cols-sm-3 row-cols-lg-6 gap-4  justify-content-center  mt-2" style={{ height: "350px" }}>
                                {
                                    product.map((item) => {
                                        return (
                                            <Card product={item} />
                                        )
                                    })


                                }
                            </div>

                        </div>
                        <div class="carousel-item w-100 h-100">
                            <div className="row row-cols-1 row-cols-md-5 row-cols-sm-3 row-cols-lg-6 gap-4  justify-content-center  mt-2" style={{ height: "350px" }}>
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
                    <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <div className="carousel-cover ">

                            <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
                        </div>

                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <div className="carousel-cover2">
                            <span class="carousel-control-next-icon  rounded-pill  " aria-hidden="true"></span>
                        </div>
                    </button>
                </div>

            </div>


        </div>


    )

}