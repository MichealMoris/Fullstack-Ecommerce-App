import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="container-fluid">
            <div className="row align-content-center p-5" style={{ height: 10 + "vh", background: "#f4f4f4" }}>
                <div className="col">
                    <Link to="/" style={{color: "#666", textDecoration: "none"}}>Home</Link>
                    <span className="ms-3 me-3">/</span>
                    <span style={{ color: "#e52e06" }}>Create Account</span>
                </div>
            </div>
            <div className="row align-content-center text-center" style={{ height: 100 + "vh" }}>
                <div className="form-dialog">
                    <h3>Create Account</h3>
                    <p className="mt-2" style={{color: "#666"}}>Please Register using account detail bellow.</p>
                    <div className="d-flex mt-4 justify-content-center">
                        <p style={{color: "#666"}}>Already have an account?</p>
                        <Link to="/account/login" className="custom-text" style={{fontSize: 16+"px"}}>Sign In</Link>
                    </div>
                    <form method="post" className="container" style={{ marginTop: 40 + "px" }}>
                        <div className="row m-auto" style={{ width: "fit-content" }}>
                            <div className="col">
                                <label htmlFor="firstName" style={{color: "#666", marginRight: (1.7 + 4) + "rem"}}>First Name</label>
                                <input type="text" name="firstName" id="firstName" className="login-inputs" placeholder="First Name"/>
                            </div>
                        </div>
                        <div className="row m-auto mt-3" style={{ width: "fit-content" }}>
                            <div className="col">
                                <label htmlFor="secondName" style={{color: "#666", marginRight: 4 + "rem"}}>Second Name</label>
                                <input type="text" name="secondName" id="secondName" className="login-inputs" placeholder="Second Name"/>
                            </div>
                        </div>
                        <div className="row m-auto mt-3" style={{ width: "fit-content" }}>
                            <div className="col">
                                <label htmlFor="email" style={{color: "#666", marginRight: (4 + 4) + "rem"}}>Email</label>
                                <input type="email" name="email" id="email" className="login-inputs" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="row m-auto mt-3" style={{ width: "fit-content" }}>
                            <div className="col">
                                <label htmlFor="password" style={{color: "#666", marginRight: (4 + 2) + "rem"}}>Password</label>
                                <input type="password" name="password" id="password" className="login-inputs"  placeholder="Password"/>
                            </div>
                        </div>
                        <button className="btn btn-danger mt-4 mb-3 register-btn">CREATE</button><br />
                        <Link to="/" className="custom-text">Return to Store</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}