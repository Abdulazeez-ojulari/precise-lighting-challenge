import React, { Component } from 'react'
import './login.css';

class Login extends Component{
    
    render(){

        return(
            <div className="navbar-login-container">
                <div className="navbar-login">
                    <div className="navbar-login-col-1">
                        <p className="navbar-login-col-1-p">login</p>
                        <i onClick={this.props.openLogin} className="fas fa-times navbar-search-col-1-cancel"></i>
                    </div>
                    <div className="navbar-login-col-2">
                        <p className="navbar-login-col-2-p">If you have an account with us, please log in</p>
                        <div className="form-container">
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input placeholder='Enter your mail' id='email' type="text" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">Password</label>
                                <p className="forgot-password">Lost your password?</p>
                                <input placeholder='Your password' id='password' type="text" className="form-input" />
                            </div>
                            <button className='button'>Login</button>
                        </div>
                        <div className="login-options-container">
                            <p className="or">or</p>
                            <div className="login-options">
                                <i className="fa fa-facebook-square login-option"></i>
                                <i className="fa fa-facebook-square login-option"></i>
                                <i className="fa fa-twitter login-option gray"></i>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-login-col-3">
                        <p className="navbar-login-col-3-p">New Customer?</p>
                        <button className="register">Create your account</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;