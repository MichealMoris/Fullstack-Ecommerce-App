import React from 'react';
import StarRating from '../ProductDetails/StarRating'

function Card(props) {
    return (
        <div>
            <div className="card1">
                <div className="card-img-top" >

                    <img src={props.product.image} className="card-img-top img-fluid" />

                    <div className="description">
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" id="car" ><i class="bi bi-bag text-light" ></i></a>
                        <a><i class="bi bi-heart text-light"></i></a>
                        <a><i class="bi bi-reception-4 text-light"></i></a>
                    </div>
                </div>
                <div className="card-body text-center">
                    <StarRating rate={props.product.rate} />
                    <div className="card-text " >
                        <h5 className="mt-2">{props.product.title}</h5>
                        <div className="price ">
                            <p className="price_text">${props.product.newprice} <span class="del text-secondary"> <del>${props.product.oldprice}</del></span></p>
                        </div>
                    </div>
                </div>




            </div>

        </div>
    );
}

export default Card;