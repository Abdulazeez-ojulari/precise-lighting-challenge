import { Component } from "react";
import './footer.css';

class Footer extends Component{

    render(){
        return(
            <div className="footer-container">
                <div className="footer-row-1">
                    <div className="footer-row-1-container">
                        <h3 className="footer-row-1-h3">Be in touch with us:</h3>
                        <div className="footer-row-1-join-us">
                            <input type="email" placeholder='Enter your email' className="footer-row-1-join-us-input" />
                            <button className="footer-row-1-button">Join Us</button>
                        </div>
                        <div className="footer-social-links">
                            <i className="fa fa-facebook-square footer-social-link-logo"></i>
                            <i className="fa fa-twitter footer-social-link-logo"></i>
                            <i className="fa fa-instagram footer-social-link-logo"></i>
                            <i className="fa fa-pinterest footer-social-link-logo"></i>
                        </div>
                    </div>
                </div>
                <div className="footer-row-2">
                    <div className="footer-row-2-navigations">
                        <h3 className="footer-row-2-navigation-h3">Categories</h3>
                        <ul className="footer-row-2-navigation-lists">
                            <a href="/" className="footer-row-2-navigation-link">
                                <li className="footer-row-2-navigation-list">Outdoor</li>
                            </a><a href="/" className="footer-row-2-navigation-link">
                                <li className="footer-row-2-navigation-list">Indoor</li>
                            </a><a href="/" className="footer-row-2-navigation-link">
                                <li className="footer-row-2-navigation-list">Commercial</li>
                            </a><a href="/" className="footer-row-2-navigation-link">
                                <li className="footer-row-2-navigation-list">Appliance</li>
                            </a>
                        </ul>
                    </div>
                    <div className="footer-row-2-navigations">
                        <h3 className="footer-row-2-navigation-h3">Information</h3>
                        <ul className="footer-row-2-navigation-lists">
                            <a href="/" className="footer-row-2-navigation-link">
                                <li className="footer-row-2-navigation-list">About Us</li>
                            </a><a href="/" className="footer-row-2-navigation-link">
                                <li className="footer-row-2-navigation-list">Contact Us</li>
                            </a><a href="/" className="footer-row-2-navigation-link">
                                <li className="footer-row-2-navigation-list">Terms and Conditions</li>
                            </a><a href="/" className="footer-row-2-navigation-link">
                                <li className="footer-row-2-navigation-list">Privacy Policy</li>
                            </a>
                        </ul>
                    </div>
                    <div className="footer-row-2-navigations">
                        <h3 className="footer-row-2-navigation-h3">Useful Links</h3>
                        <ul className="footer-row-2-navigation-lists">
                            <a href="/" className="footer-row-2-navigation-link">
                                <li className="footer-row-2-navigation-list">Your Account</li>
                            </a><a href="/" className="footer-row-2-navigation-link">
                                <li className="footer-row-2-navigation-list">Returns & Exchanges</li>
                            </a><a href="/" className="footer-row-2-navigation-link">
                                <li className="footer-row-2-navigation-list">Shipping & Delivery</li>
                            </a><a href="/" className="footer-row-2-navigation-link">
                                <li className="footer-row-2-navigation-list">FAQs</li>
                            </a>
                        </ul>
                    </div>
                    <div className="footer-row-2-navigations">
                        <h3 className="footer-row-2-navigation-h3">Contact Us</h3>
                        <ul className="footer-row-2-navigation-lists">
                            <li className="footer-row-2-navigation-contact-us">
                                <i className="fa fa-map-marker footer-row-2-navigation-contact-us-logo"></i>
                                <p>15A Emma Abimbola Cole Street,
                                Off Fola Osibo, Lekki Phase 1,
                                Lagos, Nigeria.</p>
                            </li>
                            <li className="footer-row-2-navigation-contact-us">
                                <i className="fa fa-phone footer-row-2-navigation-contact-us-logo phone"></i>
                                <p>0903 794 4292</p>
                            </li>
                            <li className="footer-row-2-navigation-contact-us">
                                <i className="fa fa-map-marker footer-row-2-navigation-contact-us-logo"></i> 
                                <p>info@preciselighting.ng</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-row-3">
                    <div className="footer-row-3-container">
                        <h3 className="footer-row-3-h3">Copyright c 2032 all rights reserved</h3>
                        <div className="footer-payment-links">
                            <h3 className="footer-payment-link">Klasha</h3>
                            <h3 className="footer-payment-link">Wema Bank Transfer</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;