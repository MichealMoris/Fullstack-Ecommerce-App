import React from "react";
import { Link } from "react-router-dom";



function HurryUp() {
  return (
    <div>
      <section id="limited-time-offer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5" />
            <div className="col-md-5">
              <div className="special-offer-wrapper">
                <div className="special-section">
                  <div className="discount-announcement">
                    <h5>hurry up !</h5>
                    <h4>up to 25% discount</h4>
                    <h6>check it out</h6>
                  </div>
                  <div className="countdown-timer">
                    <div className="countdown-item">
                      <span>10</span>
                      <br />
                      <span className="countdown-label">days</span>
                    </div>
                    <div className="countdown-item">
                      <span>5</span>
                      <br />
                      <span className="countdown-label">hrs</span>
                    </div>
                    <div className="countdown-item">
                      <span>55</span>
                      <br />
                      <span className="countdown-label">mins</span>
                    </div>
                    <div className="countdown-item">
                      <span>14</span>
                      <br />
                      <span className="countdown-label">secs</span>
                    </div>
                  </div>
                  <br />
                  <Link to="/allproducts" className="call-to-action">
                    shop now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



export default HurryUp