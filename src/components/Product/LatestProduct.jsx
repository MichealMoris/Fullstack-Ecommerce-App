import React, { useEffect, useState } from 'react'
import Card from "./Card";
import { Link } from "react-router-dom";
import axios from 'axios';


export default function LatestProduct() {
    const [products, setProducts] = useState([]);
    const accessories = products.filter((product) => {
        return product.product_category == "accessories";
    })
    const phones = products.filter((product) => {
        return product.product_category == "phones";
    })
    const headphones = products.filter((product) => {
        return product.product_category == "headphones";
    })
    async function fetchData() {
        const response = await axios.get("http://127.0.0.1:8000/products");
        setProducts(response.data);
    }

    
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="container-fluid p-5">
            <div className="title row justify-content-evenly align-items-center">

                <div className=" col-2 mt-2 mb-5 links">
                    <Link to="/allproducts" className='custom-text2'>View All Product <i class="bi bi-arrow-right fw-bold" style={{color: "#e52e06"}}></i></Link>
                </div>
                <div className="col-10">
                    <h2 className="mt-2 mb-5 ">Latest Product</h2>
                </div>


            </div>
            <div className="container-fluid">
                <div id="carouselExampleControls" class="carousel slide m-auto carousel-dark" >
                    <div class="carousel-inner" style={{ height: "450px" }}>
                        <div class="carousel-item active w-100 ">
                            <div className="row row-cols-1 row-cols-md-5 row-cols-sm-3 row-cols-lg-6 gap-4  justify-content-center  mt-2">
                                {
                                    accessories.map((item) => {
                                        return (
                                            <Card product={item} />
                                        )
                                    })
                                }
                            </div>

                        </div>
                        <div class="carousel-item w-100 h-100">
                            <div className="row row-cols-1 row-cols-md-5 row-cols-sm-3 row-cols-lg-6 gap-4  justify-content-center  mt-2">
                                {
                                    phones.map((item) => {
                                        return (
                                            <Card product={item} />
                                        )
                                    })


                                }
                            </div>

                        </div>
                        <div class="carousel-item w-100 h-100">
                            <div className="row row-cols-1 row-cols-md-5 row-cols-sm-3 row-cols-lg-6 gap-4  justify-content-center  mt-2">
                                {
                                    headphones.map((item) => {
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