import { useState } from "react"
import Magnifier from "react-magnifier";

export default function ProductImageCard({imgs}) {
    const [image, setImage] = useState(0)
    const images = imgs
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