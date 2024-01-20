import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../About/Form'
function ContactData1() {
    return (
        <div className='container'>
            <div className="row align-content-center" style={{ height: 10 + "vh", background: "#f4f4f4" }}>
                <div className="col">
                    <Link to="/" style={{ color: "#666", textDecoration: "none" }}>Home</Link>
                    <span className="ms-3 me-3">/</span>
                    <span style={{ color: "#e52e06" }}>Contact Us</span>
                </div>
            </div>
            <div className='container-fluid bg-white p-5 mt-5'>
                <h2>We're always eager to hear from you!</h2>
                <p>You can call us in working time or visit our office. All mails will get the response within 24 hours. Love to hear from you!</p>
                <div className="mt-5 row justify-content-start align-items-center row-cols-xl-4 row-cols-sm-3 row-cols-2 gap-5 w-100" style={{ height: "250px" }}>
                    <div className=" h-100 p-4">
                        <div className="row  align-items-center " >
                            <div className="col-2">
                                <i class="bi bi-geo-alt text-danger fs-1"></i>
                            </div>
                            <div className="col"> <h5>ADDRESS</h5></div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-2">

                            </div>
                            <div className="col">
                                1800 Abbot Kinney Blvd. Unit D & E Venice
                            </div>
                        </div>
                    </div>
                    <div className="h-100 p-4 ">
                        <div className="row  align-items-center">
                            <div className="col-2">

                                <i class="bi bi-telephone text-danger fs-1"></i>
                            </div>
                            <div className="col"> <h5>Contact</h5></div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-lg-2 col-1">

                            </div>
                            <div className="col ul list-unstyled">
                                <li>Mobile:<strong>(+88) – 1990 – 6886</strong> </li>
                                <li>Hotline: <strong> 1800 – 1102</strong></li>
                                <li>Mail: <strong> contact@drou.com</strong></li>

                            </div>

                        </div>
                    </div>
                    <div className=" h-100 py-4 ps-3">
                        <div className="row align-items-center">
                            <div className="col-2">
                                <i class="bi bi-clock text-danger fs-1"></i>
                            </div>
                            <div className="col text-start"><h5 className=''>HOUR OF OPERATION</h5></div>
                        </div>
                        <div className="row">
                            <div className="col-2">

                            </div>
                            <div className="col ul list-unstyled">
                                <li>Monday – Friday : 09:00 – 20:00</li>
                                <li>Sunday & Saturday: 10:30 – 22:00</li>
                            </div>

                        </div>
                    </div>
                </div>
                <Form />
            </div>

        </div>
    );
}

export default ContactData1;