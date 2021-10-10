import React, { Component } from 'react';
import './filter.css';

class Filter extends Component {
    constructor(){
        super();

        this.state = {
            filter: false,
            filterered: false,
            text: '',
        }
    }
    
    componentDidMount(){
        this.setState({
            text: this.props.text,
        })
    }


    filter = () => {
        let filter = this.state.filter
        this.setState({
            filter: !filter
        })
    }

    filterered = () => {
        let filter = this.state.filter
        this.setState({
            filterered: true,
            filter: !filter
        })
    }

    render(){

        const { filter, filterered, text} = this.state;
        return (
            <React.Fragment>
                <div className="filter-filter-container">
                    <div className="filter-filter">
                        <div className="filter-filter-col-1">
                            <div className="filter" onClick={ this.filter }>
                                { !filter &&
                                <i className="fas fa-sliders-h filter-icon"></i>
                                }
                                { filter &&
                                <i className="fas fa-times filter-icon"></i>
                                }
                                Filter
                            </div>
                        </div>
                        <div className="filter-filter-col-2">
                            <i className="fas fa-grip-lines"></i>
                            <i className="fas fa-th-large"></i>
                        </div>
                        <div className="filter-filter-col-3">
                            <div className="bestsellers">
                                { text }
                                <i className="fas fa-chevron-down bestsellers-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>

                { filter && 
                <div className="filter-options-container">
                    <div className="filter-options">
                        <div onClick={this.filterered} className="filter-options-col-1">
                            <h3 className="filter-option-name">Color</h3>
                            <ul className="filter-list-ul">
                                <li className="filter-list-li">
                                    <p className="filter-color" style={{ backgroundColor: 'black' }}></p>
                                    Black
                                </li>
                                <li className="filter-list-li">
                                    <p className="filter-color" style={{ backgroundColor: '#26bdb0' }}></p>
                                    Cyan
                                </li>
                                <li className="filter-list-li">
                                    <p className="filter-color" style={{ backgroundColor: '#8fdb7b' }}></p>
                                    Green
                                </li>
                                <li className="filter-list-li">
                                    <p className="filter-color" style={{ backgroundColor: '#c4c4c4' }}></p>
                                    Gray
                                </li>
                                <li className="filter-list-li">
                                    <p className="filter-color" style={{ backgroundColor: '#e74a8c' }}></p>
                                    Pink
                                </li>
                                <li className="filter-list-li">
                                    <p className="filter-color" style={{ backgroundColor: 'white' }}></p>
                                    White
                                </li>
                                <li className="filter-list-li">
                                    <p className="filter-color" style={{ backgroundColor: '#4095e3' }}></p>
                                    Blue
                                </li>
                            </ul>
                        </div>
                        <div onClick={this.filterered} className="filter-options-col-2">
                            <h3 className="filter-option-name">Type</h3>
                            <ul className="filter-list-ul">
                                <li className="filter-list-li">
                                    <input type="checkbox" name="type" id="type" /> Wall Lights
                                </li>
                                <li className="filter-list-li">
                                    <input type="checkbox" name="type" id="type" />
                                    Ceiling Lights
                                </li>
                                <li className="filter-list-li">
                                    <input type="checkbox" name="type" id="type" />
                                    Recessed & Spotlights
                                </li>
                                <li className="filter-list-li">
                                    <input type="checkbox" name="type" id="type" />
                                    Lamps
                                </li>
                                <li className="filter-list-li">
                                    <input type="checkbox" name="type" id="type" />
                                    Switches & Sockets
                                </li>
                            </ul>
                        </div>
                        <div onClick={this.filterered} className="filter-options-col-3">
                            <h3 className="filter-option-name">Room</h3>
                            <ul className="filter-list-ul">
                                <li className="filter-list-li">
                                    <input type="checkbox" name="room" id="room" /> Living Room
                                </li>
                                <li className="filter-list-li">
                                    <input type="checkbox" name="room" id="room" />
                                    Dining Room
                                </li>
                                <li className="filter-list-li">
                                    <input type="checkbox" name="room" id="room" />
                                    Bedroom
                                </li>
                                <li className="filter-list-li">
                                    <input type="checkbox" name="room" id="room" />
                                    Kitchen
                                </li>
                                <li className="filter-list-li">
                                    <input type="checkbox" name="room" id="room" />
                                    Bathroom
                                </li>
                                <li className="filter-list-li">
                                    <input type="checkbox" name="room" id="room" />
                                    Office
                                </li>
                            </ul>
                        </div>
                        <div onClick={this.filterered} className="filter-options-col-4">
                            <h3 className="filter-option-name">Price</h3>
                            <ul className="filter-list-ul">
                                <li className="filter-list-li">
                                    <input type="checkbox" name="price" id="price" /> # 1,200,000+
                                </li>
                                <li className="filter-list-li">
                                    <input type="checkbox" name="price" id="price" />
                                    # 600,000-# 1,200,000
                                </li>
                                <li className="filter-list-li">
                                    <input type="checkbox" name="price" id="price" />
                                    #300,000-#600,000
                                </li>
                                <li className="filter-list-li">
                                    <input type="checkbox" name="price" id="price" />
                                    #150,000-#300,000
                                </li>
                                <li className="filter-list-li">
                                    <input type="checkbox" name="price" id="price" />
                                    #50,000-#150,000
                                </li>
                                <li className="filter-list-li">
                                    <input type="checkbox" name="price" id="price" />
                                    #7,000-#50,000
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                }

                {filterered && 
                    <div className="filtered-results-container">
                        <div className="filtered-results">
                            <h4 className="filtered-results-items-found-num">4 items Found</h4>
                            <p className="clear-filter">x Clear All</p>
                            <ul className="selected-filters">
                                <li className="selected-filter">x Size: S</li>
                                <li className="selected-filter">x Price: # 50-# 150</li>
                            </ul>
                        </div>
                    </div>
                }
                
            </React.Fragment>
        )
    }
}

export default Filter;