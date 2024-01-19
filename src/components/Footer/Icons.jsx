import React from "react";




function Icons(){
    return(
       <center>
         <div className="container-fluid icons mt-5 mb-4">
            <div className="row">
            <div className="col-4 ">
                <div class="feature-list-icon">
                    <img src="https://drou-electronics-store.myshopify.com/cdn/shop/files/i2-2_medium_e2b39cba-8c39-4a2d-81c7-8e8688d8c9b5.png?v=1674276675"/>
                    <h4 className="head1">Free delivery</h4>
                    <p> And free returns. See checkout for delivery dates.</p>
                </div>
            </div>

            <div className="col-4">
                <div class="feature-list-icon">
                    <img src="https://drou-electronics-store.myshopify.com/cdn/shop/files/i2_medium_ded55818-afbc-49a9-816a-72379db6213c.png?v=1674276675"/>
                    <h4 className="head2">Pay monthly at 0% APR</h4>
                    <p> Choose to check out with Apple Card Monthly Installments.</p>
                </div>
            </div>

            <div className="col-4">
                <div class="feature-list-icon">
                    <img src="https://drou-electronics-store.myshopify.com/cdn/shop/files/gmm_medium_9c0bfab9-b0f5-46ba-ae91-e04fe3803037.png?v=1674276674"/>
                    <h4 className="head3">Personalize it</h4>
                    <p>Engrave your device with your name or a personal note</p>
                </div>
            </div>
        </div>
        </div>
       </center>
    )
}
export default Icons;