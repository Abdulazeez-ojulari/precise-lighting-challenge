import React, { Component } from "react";
import Login from "../account/login";
import Localization from "../localization/localization";
import Search from "../search/search";
import ShoppingCart from "../shoppingCart/shoppingCart";
import './navbar.css';

class Navbar extends Component{
    constructor(){
        super();
        this.state = {
            search: false,
            localiization: false,
            login: false,
            shoppingCart: false,
            categories: [],
            items: [],
        }
    }

    componentDidMount(){
        // let url = window.location.pathname;
        // if(url.includes('shopping-cart')){
        //     this.setState({
        //         shoppingCart: true
        //     })
        // }
        this.setState({
            categories: this.props.categories,
            items: this.props.items,
        })
    }
    
    openSearch = () =>{
        let search = this.state.search;
        this.setState({
            search: !search
        })
    }

    openLocalization = () =>{
        let localiization = this.state.localiization;
        this.setState({
            localiization: !localiization
        })
    }

    openLogin = () =>{
        let login = this.state.login;
        this.setState({
            login: !login
        })
    }

    openShoppingCart = () =>{
        let url = window.location.pathname;
        if(url.includes('shopping-cart')){
            this.setState({
                shopurl: true
            })
        }else{
            let shoppingCart = this.state.shoppingCart;
            this.setState({
                shoppingCart: !shoppingCart
            })
        }
    }

    render(){
        
        const { search, categories, items, localiization, login, shoppingCart} = this.state;


        return(
            <React.Fragment>
                <div className='navbar'>
                    <div className="navbar-top-container">
                        <div className="navbar-top">
                            <p className="navbar-top-number">
                                <i className="fa fa-phone navbar-top-number-logo"></i>
                                09035448141
                            </p>
                            <p className="navbar-top-address">
                                <i className="fa fa-map-marker navbar-top-address-logo"></i>
                                Lekki Phase 1,Lagos, Nigeria
                            </p>
                            <p className="navbar-top-duration">
                                <i className="fa fa-clock-o navbar-top-duration-logo"></i>
                                All week 24/7
                            </p>
                            <div className="navbar-top-social-links">
                                <i className="fa fa-facebook-square navbar-top-social-link-logo"></i>
                                <i className="fa fa-twitter navbar-top-social-link-logo"></i>
                                <i className="fa fa-instagram navbar-top-social-link-logo"></i>
                                <i className="fa fa-pinterest navbar-top-social-link-logo"></i>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-main-container">
                        <div className="navbar-main">
                            <a href="/">
                            <div className="navbar-main-logo">
                                <div className="navbar-main-logo-h3">PRECISE</div>
                                <p className="navbar-main-logo-p">LIGHTING</p>
                            </div>
                            </a>
                            <ul className="navbar-main-links">
                                <li className="navbar-main-link">
                                    <a href='/outdoor/items'>Outdoor</a>
                                </li>
                                <li className="navbar-main-link">
                                    <a href='/indoor/items'>Indoor</a>
                                </li>
                                <li className="navbar-main-link">
                                    <a href='/switches-and-sockets/items'>Switches and Sockets</a>
                                </li>
                                <li className="navbar-main-link">
                                    <a href='/commercial/items'>Commercial</a>
                                </li>
                                <li className="navbar-main-link">
                                    <a href='/book-an-appointment'>Showroom</a>
                                </li>
                                <li className="navbar-main-link">
                                    <a href='/ideas'>Ideas</a>
                                </li>
                                <li className="navbar-main-link">
                                    <a href='/vr'>VR</a>
                                </li>
                                <div className="navbar-main-dropdown-container">
                                    <div className='navbar-main-dropdown-container-row-1'>
                                        <div className="navbar-main-dropdown">
                                            <div className="navbar-main-dropdown-selections">
                                                <div className="navbar-main-dropdown-selection">
                                                    <h4 className="navbar-main-dropdown-selection-name">Room</h4>
                                                    <ul className="navbar-main-dropdown-selection-links">
                                                        <li className="navbar-main-dropdown-selection-link">Living Room</li>
                                                        <li className="navbar-main-dropdown-selection-link">Dining Room</li>
                                                        <li className="navbar-main-dropdown-selection-link">Kitchen</li>
                                                        <li className="navbar-main-dropdown-selection-link">Bathroom</li>
                                                        <li className="navbar-main-dropdown-selection-link">Office</li>
                                                    </ul>
                                                </div>
                                                <div className="navbar-main-dropdown-selection">
                                                    <h4 className="navbar-main-dropdown-selection-name">Room</h4>
                                                    <ul className="navbar-main-dropdown-selection-links">
                                                        <li className="navbar-main-dropdown-selection-link">Living Room</li>
                                                        <li className="navbar-main-dropdown-selection-link">Dining Room</li>
                                                        <li className="navbar-main-dropdown-selection-link">Kitchen</li>
                                                        <li className="navbar-main-dropdown-selection-link">Bathroom</li>
                                                        <li className="navbar-main-dropdown-selection-link">Office</li>
                                                    </ul>
                                                </div>
                                                <div className="navbar-main-dropdown-selection">
                                                    <h4 className="navbar-main-dropdown-selection-name">Room</h4>
                                                    <ul className="navbar-main-dropdown-selection-links">
                                                        <li className="navbar-main-dropdown-selection-link">Living Room</li>
                                                        <li className="navbar-main-dropdown-selection-link">Dining Room</li>
                                                        <li className="navbar-main-dropdown-selection-link">Kitchen</li>
                                                        <li className="navbar-main-dropdown-selection-link">Bathroom</li>
                                                        <li className="navbar-main-dropdown-selection-link">Office</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="navbar-main-dropdown-option">
                                                <div className="navbar-main-dropdown-option-details">
                                                    <h4 className="navbar-main-dropdown-option-name">Bestseller</h4>
                                                    <div className="navbar-main-dropdown-option-navigations">
                                                        <p className="navbar-main-dropdown-option-navigation">{'<'}</p>
                                                        <p className="navbar-main-dropdown-option-navigation">{'>'}</p>
                                                    </div>
                                                </div>
                                                <div className="navbar-main-dropdown-option-items">
                                                    <div className="navbar-main-dropdown-option-item">
                                                        <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="light" className="navbar-main-dropdown-option-item-img" />
                                                        <p className="navbar-main-dropdown-option-item-name">PL-L057|12 COPPER</p>
                                                        <h4 className="navbar-main-dropdown-option-item-price">#28.99</h4>
                                                    </div>
                                                    <div className="navbar-main-dropdown-option-item">
                                                        <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="light" className="navbar-main-dropdown-option-item-img" />
                                                        <p className="navbar-main-dropdown-option-item-name">PL-L057|12 COPPER</p>
                                                        <h4 className="navbar-main-dropdown-option-item-price">#28.99</h4>
                                                    </div>
                                                    <div className="navbar-main-dropdown-option-item">
                                                        <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="light" className="navbar-main-dropdown-option-item-img" />
                                                        <p className="navbar-main-dropdown-option-item-name">PL-L057|12 COPPER</p>
                                                        <h4 className="navbar-main-dropdown-option-item-price">#28.99</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="navbar-main-dropdown-container-row-2"></div>
                                </div>
                            </ul>
                            <div className="navbar-main-icons">
                                <i onClick={this.openSearch} className="fa fa-search navbar-main-icon"></i>
                                <i onClick={this.openLocalization} className="fa fa-globe navbar-main-icon"></i>
                                <i onClick={this.openLogin} className="fa fa-user-o navbar-main-icon"></i>
                                <i onClick={this.openShoppingCart} className="fa fa-shopping-bag navbar-main-icon">
                                    <span className="numberofitems">2</span>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
                { search && 
                    <Search categories={ categories } items={ items } openSearch={this.openSearch}></Search>
                }
                { localiization && 
                    <Localization openLocalization={this.openLocalization} ></Localization>
                }
                { login && 
                    <Login openLogin={this.openLogin} ></Login>
                }
                { shoppingCart && 
                    <ShoppingCart openShoppingCart={this.openShoppingCart} ></ShoppingCart>
                }
                
            </React.Fragment>
        )
    }
}

export default Navbar;