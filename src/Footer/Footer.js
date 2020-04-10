import React from 'react'
import './Footer.css'

const footer = () => {

    return (
        <div className="footer-distributed">
            <footer >
                <div className="footer-left">

                    <h3>About FortyTwoLabs</h3>

                    <p className="footer-links">
                        <a href="#">Home</a>
|
                        <a href="#">About</a>
					|
					<a href="#">Contact</a>
                    </p>

                    <p className="footer-company-name">© Fortytwo Pvt. Ltd.</p>
                </div>

                <div className="footer-center">
                    <div>
                        <p><span>Fortytwo Labs - 202, Siddh Icon, </span>
                        Baner, Pune, Maharashtra 411 045</p>
                    </div>

                    <div>
                        <p>+91 9823348880</p>
                    </div>
                    <div>
                        <br></br>
                        <p><a href="mailto:support@gmail.com">hr@fortytwo42.in</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the company</span>
                        We are glad to have you here. Please do send us your interest and/ or queries. We would love to hear from you. We promise your information won’t be added to any marketing lists, sold or shared with partners.</p>

                </div>
            </footer>
        </div>
    )
}

export default footer