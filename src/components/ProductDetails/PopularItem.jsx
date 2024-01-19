import StarRating from "./StarRating"
import { useState } from "react";
export default function PopularItem(props){
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    return (
        <div className="card shadow-sm rounded-0">
            <div className="card-body text-center">
                <img className="card-img-top img-fluid p-card-img" src={props.img} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                <StarRating  rate = {props.rate}/>
                <a className="text-dark text-decoration-none fs-5" href="#">{props.name}</a>
                <div className="product-price">
                    <span className="price fw-bold" style={{color: "#e52e06"}}>{props.price}</span>
                    <span className="old-price text-decoration-line-through ms-1" style={{fontSize: 14+"px"}}>{props.old}</span>
                </div>
                {/* {isHovering && ()} */}
            </div>
        </div>
    )
}