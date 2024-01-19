import React from "react";


function Discount() {
    return (
        <div className="discount container mt-5 d-flex justify-content-center align-items-center">
            <div className="discount-body text-center">
                <span>Big Discount</span>
                <h4>Google Pixel Smart Phone</h4>
                <h4 style={{fontFamily: "CerebriSansBold", color: "#e4573d"}}>$350.00</h4>
                <div className="div_btn">
                    <button  >Shop Now</button>
                </div>
            </div>
        </div>
    )
}
export default Discount;