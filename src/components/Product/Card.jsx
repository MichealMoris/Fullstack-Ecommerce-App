import React from 'react';
import StarRating from '../ProductDetails/StarRating';
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <Link to={"/productDetails/" + props.product.id} style={{textDecoration: "none"}}>
            <div className='mt-2'>
                <div className="card card1">
                    <div className="card-img-top" >

                        <img src={props.product.product_main_img} className="card-img-top img-fluid" style={{aspectRatio: 4/4, objectFit: "contain"}}/>

                        <div className="description">
                            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" id="car" ><i class="bi bi-bag text-light" ></i></a>
                            <a><i class="bi bi-heart text-light"></i></a>
                            <a><i class="bi bi-reception-4 text-light"></i></a>
                        </div>
                    </div>
                    <div className="card-body text-center">
                        <StarRating rate={props.product.product_rate} />
                        <div className="card-text " >
                            <h5 className="mt-2" style={{color: "#333"}}>{props.product.product_name ? props.product.product_name.slice(0, 9) + "..." : ""}</h5>
                            <div className="price ">
                                <p className="price_text">${props.product.product_current_price}.00 <span class="del text-secondary"> <del>{props.product.product_old_price ? "$" + props.product.product_old_price + ".00" : ""}</del></span></p>
                            </div>
                        </div>
                    </div>




                </div>

            </div>
        </Link>
    );
}

export default Card;