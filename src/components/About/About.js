import React from "react";
import { Link } from "react-router-dom";
import Form from './Form'


function About() {
    return (
        <div className="container">
            <div className="row align-content-center" style={{ height: 10 + "vh", background: "#f4f4f4" }}>
                <div className="col">
                    <Link to="/" style={{ color: "#666", textDecoration: "none" }}>Home</Link>
                    <span className="ms-3 me-3">/</span>
                    <span style={{ color: "#e52e06" }}>About Us</span>
                </div>
            </div>
            <div className="row container-fluid mt-4 mb-4 p-3">
                <h1>Say Hello to Team 3 IT. Hello!</h1>
                <p>mpower human-centered we Emust stand up emerging revolutionary
                    co-creation rubric. Bandwidth think tank collaborative consumption green space boots on the ground revolutionary. Academic academic, to replicable improve the world; impact state of play shared vocabulary collaborative cities. Overcome injustice green
                    space social intrapreneurship policymaker
                    compassion the. Black lives matter low-hanging.</p>
            </div>

            <div className="row">
                <div className="col-4">
                    <div className="content">
                        <span><i class="fab fa-codepen"></i></span>
                        <h5>Our Vision</h5>
                        <ul>
                            <li>Good Service</li>
                            <li>For Community</li>
                            <li>Long Term Development</li>
                            <li>Save Our Planet</li>
                            <li>Help People</li>
                        </ul>
                    </div>
                </div>


                <div className="col-4">
                    <div className="content">
                        <span><i class="fa-brands fa-atlassian"></i></span>
                        <h5>Our Promise</h5>
                        <ul>
                            <li>Sustainable Relationship</li>
                            <li>Renew Commitment</li>
                            <li>Provide The Best Solution</li>
                            <li>Profitable Relationship</li>
                            <li>Adapt With People's Needs</li>
                        </ul>
                    </div>
                </div>


                <div className="col-4">
                    <div className="content">
                        <span><i class="fab fa-squarespace"></i></span>
                        <h5>Our Mision</h5>
                        <ul>
                            <li>Change The Habits</li>
                            <li>Best Quality</li>
                            <li>Think Big Do Bigger</li>
                            <li>Stablity & competence</li>
                            <li>Safer & Better Life</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Form/>
            <br/>
        </div>

    )
}
export default About;
