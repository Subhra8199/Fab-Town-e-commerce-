import React from 'react'
import './Footer.css'
import logo from "../Assets/logo_personal.svg"
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt="Fab Town logo" />
                <p>FAB TOWN</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="instagram icon" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="pinterest icon" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon } alt="whatsapp icon" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2025 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
