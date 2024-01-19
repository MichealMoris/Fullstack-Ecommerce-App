import React from "react";


function Footer(){
    return(
        <div className="container mt-5">

            <div className="row">
                <div className="col-3">
                <h5 className="footer-title">Contact us</h5>
                <div className="footer-info">
                    <ul className="footer-info-list">
                        <li><span>Drou Demo Store</span></li>
                        <li><span>No. 1259 Freedom, New York</span></li>
                        <li><span>United States</span></li>
                        <li><span>+91-987654321</span></li>
                        <li><span>demo@exampledemo.com</span></li>
                    </ul>
                </div>
                </div>

                <div className="col-3">
                <h5 className="footer-title">Information</h5>
                <div className="footer-info">
                    <ul className="footer-info-list">
                        <li><a href="#" >Product Support</a></li>
                        <li><a href="#" >Checkout</a></li>
                        <li><a href="#" >License Policy</a></li>
                        <li><a href="#" >Affiliate</a></li>
                    </ul>
                </div>
                </div>

                <div className="col-3">
                <h5 className="footer-title">Customer Service</h5>
                <div className="footer-info">
                    <ul className="footer-info-list">
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Redeem Voucher</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Policies & Rules</a></li>
                    </ul>
                </div>
                </div>

                <div className="col-3">
                <h5 className="footer-title">Download Our App</h5>
                <div className=""><p>Download our App and get extra 
                    15% Discount on your first Order..!</p>
                    </div>
                </div>
            </div><br></br>
            <p className="pfooter">Copyright © Team_3_IT </p>
            </div>
            
    )
};
export default Footer;