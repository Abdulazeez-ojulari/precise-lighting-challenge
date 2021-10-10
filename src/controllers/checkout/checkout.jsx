import React, { Component } from "react";
import './checkout.css';

class Checkout extends Component{

    render(){
        return(
            <React.Fragment>
                <div className="checkout-header-container">
                    <div className="checkout-header">
                        <div className="checkout-header-row-1">
                            <ul className="checkout-header-pages">
                                <li className="checkout-header-page">Home</li>
                                <li className="checkout-header-page">
                                    <a href='/shopping-cart'>Shopping Cart</a>
                                </li>
                                <li className="checkout-header-page">
                                    <a href='/checkout'>Checkout</a>
                                </li>
                            </ul>
                        </div>
                        <div className="checkout-header-row-2">
                            <h3 className="checkout-header-category">
                                Checkout
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="checkout-container">
                    <div className="checkout">
                        <div className="checkout-col-1">
                            <div className="checkout-contact-information">
                                <div className="checkout-contact-information-row-1">
                                    <h3 className="checkout-contact-information-h3">Contact Information</h3>
                                    <p className="checkout-contact-information-account-check">Already have an account? Log in</p>
                                </div>
                                <div className="checkout-contact-information-row-2">
                                    <input type="text" placeholder='Email or mobile phone number' className="checkout-contact-information-input" />
                                </div>
                                <div className="checkout-contact-information-row-3">
                                    <p className="checkout-contact-information-checkbox">Keep me up to date on news and exclusive offer</p>
                                </div>
                            </div>
                            <div className="checkout-shipping-address">
                                <h3 className="checkout-shipping-address-h3">Shipping Address</h3>
                                <div className="col-2">
                                    <input type="text" placeholder='First name (optional)' className="checkout-shipping-address-input" />
                                    <input type="text" placeholder='Last name' className="checkout-shipping-address-input" />
                                </div>
                                <input type="text" placeholder='Address' className="checkout-shipping-address-input" />
                                <input type="text" placeholder='Appartment (optional)' className="checkout-shipping-address-input" />
                                <input type="text" placeholder='City' className="checkout-shipping-address-input" />
                                <div className="col-2">
                                    <input type="text" placeholder='State' className="checkout-shipping-address-input" />
                                    <input type="text" placeholder='Postal Code' className="checkout-shipping-address-input" />
                                </div>
                            </div>
                            <button className="checkout-shipping-address-button">Continue Shopping</button>
                        </div>
                        <div className="checkout-col-2">
                            <div className="checkout-items-summary">
                                <h3 className="checkout-items-summary-h3">Summary</h3>
                                <div className="checkout-item-summary">
                                    <p className="checkout-item-summary-name">PL-L057|12 COPPER</p>
                                    <p className="checkout-item-summary-price">#32,000</p>
                                </div>
                                <div className="checkout-item-summary">
                                    <p className="checkout-item-summary-name">PL-L057|12 COPPER</p>
                                    <p className="checkout-item-summary-price">#32,000</p>
                                </div>
                                <div className="checkout-item-summary">
                                    <p className="checkout-item-summary-name">PL-L057|12 COPPER</p>
                                    <p className="checkout-item-summary-price">#32,000</p>
                                </div>
                                <div className="checkout-item-summary">
                                    <p className="checkout-item-summary-name">PL-L057|12 COPPER</p>
                                    <p className="checkout-item-summary-price">#32,000</p>
                                </div>
                            </div>
                            <div className="checkout-payment-methods">
                                <h3 className="checkout-payment-methods-h3">Payment Method</h3>
                                <div className="checkout-payment-method">
                                    <div className="checkout-payment-method-option">
                                        <input className='checkout-payment-method-radioInput' type="radio" id="Wema Transfer" name="language" value="Wema Transfer" />
                                        <label htmlFor="Wema Transfer" className="checkout-payment-method-radio-button"></label>
                                        <label htmlFor="Wema Transfer" className='checkout-payment-method-radioLabel'>Wema Transfer</label><br />
                                        <div className="bgg"></div>
                                    </div>
                                </div>
                                <div className="checkout-payment-method">
                                    <div className="checkout-payment-method-option">
                                        <div className="bgg"></div>
                                        <input className='checkout-payment-method-radioInput' type="radio" id="Klasha" name="language" value="Klasha" />
                                        <label htmlFor="Klasha" className="checkout-payment-method-radio-button"></label>
                                        <label htmlFor="Klasha" className='checkout-payment-method-radioLabel'>Klasha</label><br />
                                        <div className="bgg"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="shoppingCart-cart-totals">
                                <div className="shoppingCart-cart-totals-row-1">
                                    <h4 className="shoppingCart-cart-totals-subtotal">Subtotals:</h4>
                                    <p className="shoppingCart-cart-totals-subtotal-amount">#120,000</p>
                                </div>
                                <div className="shoppingCart-cart-totals-row-2">
                                    <h4 className="shoppingCart-cart-totals-total">Totals:</h4>
                                    <p className="shoppingCart-cart-totals-total-amount">#222,000</p>
                                </div>
                                <div className="shoppingCart-cart-totals-row-3">
                                    <p className="shoppingCart-cart-totals-shipping">Shipping & taxes calculated at checkout</p>
                                </div>
                                <div className="shoppingCart-cart-totals-row-4">
                                    <a href='/checkout' className="shoppingCart-cart-total-button">Proceed To Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Checkout;