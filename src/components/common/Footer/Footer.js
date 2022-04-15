import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="copyright">© Jeysson Henriquez</div>
            <div className="social-networks">
                <a
                    href="https://www.instagram.com/jeyssonhenriquez/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/jeyssonhenriquez/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
