import React, { useEffect, useState } from 'react'
import Card from "./Card";
import axios from 'axios';


export default function PopularProduct() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState("accessories");
    const accessories = products.filter((product) => {
        return product.product_category == "accessories";
    })
    const phones = products.filter((product) => {
        return product.product_category == "phones";
    })
    const laptops = products.filter((product) => {
        return product.product_category == "laptops";
    })
    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:8000/products");
            const data = response.data["data"];
            setProducts(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    
    fetchData();

    return (

        <div className="container-fluid p-5 ">

            <div className="title row justify-content-between align-items-center ">

                <div className=" col-1 col-md-2 col-lg-3  mt-2 mb-5 ms-5">
                    <a className={categories == "accessories" ? "links selected" : "links"} onClick={() => {
                        setCategories("accessories")
                    }}>Accessories </a>
                    <a className={categories == "phones" ? "links selected" : "links"} onClick={() => {
                        setCategories("phones")
                    }}>Phones </a>
                    <a className={categories == "laptops" ? "links selected" : "links"} onClick={() => {
                        setCategories("laptops")
                    }}>Laptop </a>

                </div>
                <div className="col-7">
                    <h2 className="mt-2 mb-5 ">Popular Product</h2>
                </div>


            </div>
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-4 row-cols-sm-3 row-cols-lg-5 gap-4  justify-content-center  mt-5" >
                    {
                        categories == "accessories" ?
                        accessories.map((item) => {
                            return (
                                <Card product={item} />
                            )

                        }) : categories == "phones" ? phones.map((item) => {
                            return (
                                <Card product={item} />
                            )

                        }) : laptops.map((item) => {
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