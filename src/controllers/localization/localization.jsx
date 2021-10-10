import React, { Component } from 'react'
import './localization.css';

class Localization extends Component{

    
    render(){

        return(
            <div className="navbar-localization-container">
                <div className="navbar-localization">
                    <div className="navbar-localization-col-1">
                        <p className="navbar-localization-col-1-p">Localization</p>
                        <i onClick={this.props.openLocalization} className="fas fa-times navbar-search-col-1-cancel"></i>
                    </div>
                    <div className="navbar-localization-col-2">
                        <h4 className="navbar-localization-col-2-h4">Language</h4>
                        <div className="row-option">
                            <div className="option">
                                <input className='radioInput' type="radio" id="English" name="language" value="English" />
                                <label htmlFor="English" className="radio-button"></label>
                                <label htmlFor="English" className='radioLabel'>English</label><br />
                            </div>
                            <div className="option">
                                <input className='radioInput' type="radio" id="Francais" name="language" value="Francais"/>
                                <label htmlFor="Francais" className="radio-button"></label>                                    
                                <label htmlFor="Francais" className='radioLabel'>Francais</label>
                            </div>
                            <div className="option">
                                <input className='radioInput' type="radio" id="Espanol" name="language" value="Espanol"/>
                                <label htmlFor="Espanol" className="radio-button"></label>                                    
                                <label htmlFor="Espanol" className='radioLabel'>Espanol</label>
                            </div>
                            <div className="option">
                                <input className='radioInput' type="radio" id="Polskie" name="language" value="Polskie"/>
                                <label htmlFor="Polskie" className="radio-button"></label>                                    
                                <label htmlFor="Polskie" className='radioLabel'>Polskie</label>
                            </div>
                            <div className="option">
                                <input className='radioInput' type="radio" id="Turkor" name="language" value="Turkor"/>
                                <label htmlFor="Turkor" className="radio-button"></label>                                    
                                <label htmlFor="Turkor" className='radioLabel'>Turkor</label>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-localization-col-3">
                        <h4 className="navbar-localization-col-3-h4">Currency</h4>
                        <div className="row-option">
                            <div className="option">
                                <input className='radioInput' type="radio" id="naira" name="currency" value="naira"/>
                                <label htmlFor="naira" className="radio-button"></label>                                    
                                <label htmlFor="naira" className='radioLabel'> NGN (Naira)</label>
                            </div>
                            <div className="option">
                                <input className='radioInput' type="radio" id="usd" name="currency" value="usd"/>
                                <label htmlFor="usd" className="radio-button"></label>                                    
                                <label htmlFor="usd" className='radioLabel'>USD (US Dollar)</label>
                            </div>
                            <div className="option">
                                <input className='radioInput' type="radio" id="euro" name="currency" value="euro"/>
                                <label htmlFor="euro" className="radio-button"></label>                                    
                                <label htmlFor="euro" className='radioLabel'>EUR (Euro)</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Localization;