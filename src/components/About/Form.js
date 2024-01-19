import React from "react";


function Form() {
    return (
        <div className="container form-login text-center mb-5 mt-5">
            <h2 className="mt-3">Ask us anything here</h2>
            <form className="mt-4 mb-4">
                <div className="row">
                    <div className="col-6">
                        <div class="mb-3">
                            <input type="text" class="form-control " placeholder="Name*" />
                        </div>

                    </div>
                    <div className="col-6">
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Email*" />
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Subject*" />
                </div>
                <div class="mb-3">
                    <textarea className="form-control" rows={5} placeholder="Message*"></textarea>
                </div>
                <button type="submit" class="submit">Send Message</button>
            </form>
        </div>
    )
}
export default Form