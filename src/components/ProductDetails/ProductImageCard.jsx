import { useState } from "react"
import Magnifier from "react-magnifier";

export default function ProductImageCard() {
    const [image, setImage] = useState(0)
    const images = ["https://drou-electronics-store.myshopify.com/cdn/shop/products/p8_523c97c7-2aa2-47e8-8b17-5a3c05a66db3_1024x1024.jpg?v=1674275335",
     "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_36d931d4-1ef2-4c82-9a65-80426fb77f21.jpg?v=1674275335",
     "https://drou-electronics-store.myshopify.com/cdn/shop/products/p3_d18efad6-a918-44d9-9659-eac65cbb0fb9.jpg?v=1674275335"]
    return (
        <div className="col-6">
            {/* <img className="" src={images[image]} /> */}
            <Magnifier className="border rounded img-fluid" src={images[image]}/>
            <div className="container-fluid mt-2">
                <div className="row">
                    {
                        images.map((mImage, index) => {
                            return (
                                <div className="col-4">
                                    <img key={index} id={index == image ? "active-product-card" : ""} className="border rounded img-fluid product-images-card"
                                     src={mImage} alt=""
                                     onClick={() => {setImage(index)}}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}