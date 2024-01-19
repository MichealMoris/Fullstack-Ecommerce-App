import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="container-fluid">
            <div className="row align-content-center p-5" style={{ height: 10 + "vh", background: "#f4f4f4" }}>
                <div className="col">
                    <Link to="/" style={{color: "#666", textDecoration: "none"}}>Home</Link>
                    <span className="ms-3 me-3">/</span>
                    <span style={{ color: "#e52e06" }}>Account</span>
                </div>
            </div>
            <div className="row align-content-center text-center" style={{ height: 100 + "vh" }}>
                <div className="form-dialog">
                    <h3 style={{fontFamily: "CerebriSansBold"}}>Login</h3>
                    <p className="mt-5" style={{color: "#666"}}>Please login using account detail bellow.</p>
                    <form method="post" className="container" style={{ marginTop: 40 + "px" }}>
                        <div className="row m-auto" style={{ width: "fit-content" }}>
                            <div className="col">
                                <label htmlFor="email" style={{color: "#666"}}>Email</label>
                                <input type="email" name="email" id="email" className="login-inputs" style={{ marginLeft: (1.9 + 5) + "rem" }} placeholder="Email"/>
                            </div>
                        </div>
                        <div className="row m-auto mt-3" style={{ width: "fit-content" }}>
                            <div className="col">
                                <label htmlFor="password" style={{color: "#666"}}>Password</label>
                                <input type="password" name="password" id="password" className="login-inputs" style={{ marginLeft: 5 + "rem" }}  placeholder="Password"/>
                            </div>
                        </div>
                        <p className="custom-text mt-4">Forgot Your Password?</p>
                        <button className="btn btn-danger mt-2 register-btn">SIGN IN</button>
                        <hr style={{marginTop: 30 +"px"}}/>
                        <Link to="/account/register" className="custom-text mt-3" >Create account</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}