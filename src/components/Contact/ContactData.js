import React from 'react';
function ContactData(props) {
    return (
        <div className='container-fluid bg-white p-5 mt-5'>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />
            <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css' />
            <h2>We're always eager to hear from you!</h2>
            <p>You can call us in working time or visit our office. All mails will get the response within 24 hours. Love to hear from you!</p>
            <div className="mt-5 row justify-content-center align-items-center row-cols-xl-4 row-cols-sm-3 row-cols-2 gap-3 w-100" style={{ height: "250px" }}>
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





        </div>
    );
}

export default ContactData;