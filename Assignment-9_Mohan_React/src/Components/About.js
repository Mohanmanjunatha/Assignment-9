import React from "react";
import './About.css';
import about from '../Images/aboutUs.png';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';



const About = () => {
    let navigate = useNavigate();
    return (
        <div className="aboutBodyWrapper">
            <div className="aboutContentWrapper">
                <div className="aboutImageWrapper">
                    <img id="aboutImage" alt="aboutImage" src={about} />
                </div>
                <div className="aboutCardWrapper">
                    <div className="cardBody">
                        <div className="cardHeading">
                            <h3>Tech 101</h3>
                        </div>
                        <div className="cardDesc">
                            <p>Struggling to grow sales? Learn how to go from first day to first sale in this free training course.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactUsBtn">
                <button onClick={() => { navigate("/contact") }} type="button" className="btn btn-success">Contact Us</button>
            </div>
            <div className="aboutFooterWrapper">
                <Footer />
            </div>
        </div>
    );
}

export default About;