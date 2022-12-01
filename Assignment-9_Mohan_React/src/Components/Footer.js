import React from "react";
import './Footer.css'

const Footer = () => {
    const footerTitle = "Need more help? Contact us below!"
    return (
        <div className="footerWrapper">
            <div className="footerTitle">
                <h2>{footerTitle}</h2>
            </div>
            <div className="footerLinks">
                <div className="linkedIn">
                    <a href="#">LinkedIn</a>
                </div>
                <div className="facebook">
                    <a href="#">Facebook</a>
                </div>
                <div className="phone">
                    <a href="#">Phone</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;