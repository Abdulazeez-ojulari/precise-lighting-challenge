import React, { Component } from 'react'
import './shoppingCart.css';

class ShoppingCart extends Component{
    constructor(){
        super();
        this.state = {
            shoppingItems: {},
            totalAmount: 0,
            shopurl: false
        }
    }

    componentDidMount(){
        let url = window.location.pathname;
        if(url.includes('shopping-cart')){
            this.setState({
                shopurl: true
            })
        }
        let shoppingItems = JSON.parse(localStorage.getItem('shoppingCart'));
        this.setState({
            shoppingItems: shoppingItems,
        })
        this.getTotal()
    }
    
    getTotal(){
        var totalAmount = 0;
        let shoppingItems = JSON.parse(localStorage.getItem('shoppingCart'));

        if(shoppingItems){
            Object.keys(shoppingItems).forEach(keys => {
                totalAmount += shoppingItems[keys]['totalAmount'];
            })
        }
        this.setState({
            totalAmount: totalAmount
        })
    }

    increment(e, item){
        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

        shoppingCart[item.itemName]['quantity']++;
        shoppingCart[item.itemName]['totalAmount'] = parseFloat(item.itemPrice) * shoppingCart[item.itemName]['quantity'];
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        this.setState({
            shoppingItems: shoppingCart,
        })
        this.getTotal()
    }

    decrement(e, item){
        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

        shoppingCart[item.itemName]['quantity']--;
        shoppingCart[item.itemName]['totalAmount'] = parseFloat(item.itemPrice) * shoppingCart[item.itemName]['quantity'];
        if(shoppingCart[item.itemName]['quantity'] <= 0){
            delete shoppingCart[item.itemName];
        }
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        this.setState({
            shoppingItems: shoppingCart,
        })
        this.getTotal()
    }

    removeFromCart(e, item){
        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
        delete shoppingCart[item.itemName];
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        this.setState({
            shoppingItems: shoppingCart,
        })
        this.getTotal()
    }

    
    render(){
        const { shoppingItems, totalAmount, shopurl } = this.state;
        let navShoppingItemsDetails;
        let shoppingItemsDetails;
        if(shoppingItems){
            navShoppingItemsDetails = Object.values(shoppingItems).map(item => {
                return(
                    <div key={ item.id } className="navbar-shopping-item">
                        <div className="navbar-shopping-item-col-1">
                            <img src={item.itemImg} 
                            alt={item.itemName} className="navbar-shopping-item-img" />
                        </div>
                        <div className="navbar-shopping-item-col-2">
                            <p className="navbar-shopping-item-name">{ item.itemName }</p>
                            <p className="navbar-shopping-item-color">{ item.color }</p>
                            <div className="navbar-shopping-item-col-2-f">
                                <div className="navbar-shopping-item-count">
                                    <div onClick={(e) => this.decrement(e, item)} className="navbar-shopping-item-count-dec">-</div>
                                    <p className="navbar-shopping-item-count-num">{ item.quantity }</p>
                                    <div onClick={(e) => this.increment(e, item)} className="navbar-shopping-item-count-inc">+</div>
                                </div>
                                <h3 className="navbar-shopping-item-price">#{ item.itemPrice }</h3>
                                <i onClick={(e) => this.removeFromCart(e, item)} className="far fa-trash-alt shopping-item-remove"></i>
                            </div>
                        </div>
                    </div>
                )
            })
            shoppingItemsDetails = Object.values(shoppingItems).map(item => {
                return(
                    <div key={ item.id } className="shoppingCart-item-summary">
                        <div className="shoppingCart-item-summary-col-1">
                            <div className="shoppingCart-item-summary-col-1-col-1">
                                <img src={item.itemImg} alt={item.itemName} className="shoppingCart-item-summary-img" />
                                <div onClick={(e) => this.removeFromCart(e, item)} className="shoppingCart-item-summary-remove">x</div>
                            </div>
                            <div className="shoppingCart-item-summary-col-1-col-2 justify-end">
                                <p className="shoppingCart-item-summary-name">{item.itemName}</p>
                                <p className="shoppingCart-item-summary-color">Color: { item.color }</p>
                            </div>
                        </div>
                        <div className="shoppingCart-item-summary-col-2 justify-end">#{ item.itemPrice }</div>
                        <div className="shoppingCart-item-summary-col-3 justify-end">
                            <div className="shoppingCart-item-count">
                                <div onClick={(e) => this.decrement(e, item)} className="shoppingCart-item-count-dec">-</div>
                                <p className="shoppingCart-item-count-num">{ item.quantity }</p>
                                <div onClick={(e) => this.increment(e, item)} className="shoppingCart-item-count-inc">+</div>
                            </div>
                        </div>
                        <div className="shoppingCart-item-summary-col-4 justify-end">#{ item.totalAmount }</div>
                    </div>
                )
            })
        }

        return(
            <React.Fragment>
            {!shopurl ?
                <div className="navbar-shoppingCart-container">
                    <div className="navbar-shoppingCart">
                        <div className="navbar-shoppingCart-col-1">
                            <p className="navbar-shoppingCart-col-1-p">Shopping Cart</p>
                            <i onClick={this.props.openShoppingCart} className="fas fa-times navbar-search-col-1-cancel"></i>
                        </div>
                        <div className="navbar-shoppingCart-col-2">
                            <div className="navbar-shopping-items">
                                { navShoppingItemsDetails }
                            </div>
                        </div>
                        <div className="navbar-shoppingCart-col-3">
                            <div className="navbar-shoppingCart-total">
                                <p className="navbar-shoppingCart-total-p">Total</p>
                                <h3 className="navbar-shoppingCart-total-amount"># { totalAmount }</h3>
                            </div>
                            <button className="checkout-btn">Check Out</button>
                            <a href='/shopping-cart' className="view-cart">View Cart</a>
                        </div>
                    </div>
                </div> 
                :
                <React.Fragment>
                    <div className="shoppingCart-header-container">
                        <div className="shoppingCart-header">
                            <div className="shoppingCart-header-row-1">
                                <ul className="shoppingCart-header-pages">
                                    <li className="shoppingCart-header-page">Home</li>
                                    <li className="shoppingCart-header-page active-text">
                                        <a href='/shopping-cart'>Shopping Cart</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="shoppingCart-header-row-2">
                                <h3 className="shoppingCart-header-category">
                                    Shopping Cart
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="shoppingCart-container">
                        <div className="shoppingCart">
                            <div className="shoppingCart-col-1">
                                <div className="shoppingCart-summary-headers">
                                    <h4 className="shoppingCart-summary-header">Product</h4>
                                    <h4 className="shoppingCart-summary-header justify-end">Price</h4>
                                    <h4 className="shoppingCart-summary-header justify-end">Qantity</h4>
                                    <h4 className="shoppingCart-summary-header justify-end">Total</h4>
                                </div>
                                <div className="shoppingCart-items-summary">
                                    { shoppingItemsDetails }
                                </div>
                                <div className="shoppingCart-buttons">
                                    <button className="shoppingCart-button">Update Cart</button>
                                    <button className="shoppingCart-button">Clear Cart</button>
                                </div>
                            </div>
                            <div className="shoppingCart-col-2">
                                <div className="shoppingCart-col-2-row-1">
                                    <h4 className="shoppingCart-col-2-row-1-h4">Cart Totals</h4>
                                    <div className="shoppingCart-cart-totals">
                                        <div className="shoppingCart-cart-totals-row-1">
                                            <h4 className="shoppingCart-cart-totals-subtotal">Subtotals:</h4>
                                            <p className="shoppingCart-cart-totals-subtotal-amount">#120,000</p>
                                        </div>
                                        <div className="shoppingCart-cart-totals-row-2">
                                            <h4 className="shoppingCart-cart-totals-total">Totals:</h4>
                                            <p className="shoppingCart-cart-totals-total-amount"># { totalAmount }</p>
                                        </div>
                                        <div className="shoppingCart-cart-totals-row-3">
                                            <p className="shoppingCart-cart-totals-shipping">Shipping & taxes calculated at checkout</p>
                                        </div>
                                        <div className="shoppingCart-cart-totals-row-4">
                                            <a href='/checkout' className="shoppingCart-cart-total-button">Proceed To Checkout</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="shoppingCart-col-2-row-2">
                                    <h4 className="shoppingCart-col-2-row-2-h4">Calculate Shipping</h4>
                                    <div className="shoppingCart-calculate-shipping">
                                        <input type="text" placeholder='State' className="shoppingCart-calculate-shipping-input" />
                                        <input type="text" placeholder='Address' className="shoppingCart-calculate-shipping-input" />
                                        <input type="text" placeholder='Postal Code' className="shoppingCart-calculate-shipping-input" />
                                        <button className="shoppingCart-calculate-shipping-button">Calculate Shipping</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }
            </React.Fragment>
        )
    }
}

export default ShoppingCart;