import React, { Component } from 'react';
import './bookAnAppointment.css';

class BookAnAppointment extends Component{

    render(){
        return(
            <React.Fragment>
                <div className="appointment-header-container">
                    <div className="appointment-header">
                        <div className="appointment-header-row-1">
                            <ul className="appointment-header-pages">
                                <li className="appointment-header-page">Home</li>
                                <li className="appointment-header-page active-text">
                                    <a href='/book-an-appointment'>Book an appointment</a>
                                </li>
                            </ul>
                        </div>
                        <div className="appointment-header-row-2">
                            <h3 className="appointment-header-category">
                                Book An Appointment
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="book-appointment-steps">
                    <div className="book-appointment-step">
                        <i className="fa fa-globe book-appointment-step-icon"></i>
                        <h3 className="book-appointment-step-h3">Step 1</h3>
                        <h4 className="book-appointment-step-h4">Book an appointment</h4>
                        <p className="book-appointment-step-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="book-appointment-step active-border-bottom">
                        <i className="fa fa-globe book-appointment-step-icon"></i>
                        <h3 className="book-appointment-step-h3">Step 2</h3>
                        <h4 className="book-appointment-step-h4">Tell us more</h4>
                        <p className="book-appointment-step-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="book-appointment-step">
                        <i className="fa fa-globe book-appointment-step-icon"></i>
                        <h3 className="book-appointment-step-h3">Step 2</h3>
                        <h4 className="book-appointment-step-h4">Get inspired</h4>
                        <p className="book-appointment-step-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="book-appointment-images-container">
                    <div className="book-appointment-images">
                        <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="appointment" className="book-appointment-image" />
                        <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="appoinment" className="book-appointment-image" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BookAnAppointment;