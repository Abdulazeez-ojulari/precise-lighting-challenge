import React, { Component } from "react";
import Filter from "../filter/filter";
import './ideas.css';

class Ideas extends Component{

    render(){
        return(
            <React.Fragment>
                <div className="ideas-header-container">
                    <div className="ideas-header">
                        <div className="ideas-header-row-1">
                            <ul className="ideas-header-pages">
                                <li className="ideas-header-page">Home</li>
                                <li className="ideas-header-page active-text">
                                    <a href='/ideas'>Ideas</a>
                                </li>
                            </ul>
                        </div>
                        <div className="ideas-header-row-2">
                            <h3 className="ideas-header-category">
                                Ideas
                            </h3>
                        </div>
                    </div>
                </div>
                <Filter text='Newest'></Filter>
                <div className="ideas-container">
                    <div className="ideas">
                        <div className="row-1">
                            <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="" className="idea-img col-1" />
                            <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="" className="idea-img col-1" />
                            <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="" className="idea-img col-1" />
                            <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="" className="idea-img col-1" />
                        </div>
                        <div className="row-2">
                            <div className="row-2-col-1">
                                <div className="row-2-col-1-row-1">
                                    <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="idea" className="idea-img" />
                                    <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="idea" className="idea-img" />
                                </div>
                                <div className="row-2-col-1-row-2">
                                    <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="idea" className="idea-img" />
                                    <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="idea" className="idea-img" />
                                </div>
                            </div>
                            <div className="row-2-col-2">
                                <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="idea" className="idea-img" />
                            </div>
                        </div>
                        <div className="row-2">
                            <div className="row-2-col-2">
                                <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="idea" className="idea-img" />
                            </div>
                            <div className="row-2-col-1">
                                <div className="row-2-col-1-row-1">
                                    <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="idea" className="idea-img" />
                                    <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="idea" className="idea-img" />
                                </div>
                                <div className="row-2-col-1-row-2">
                                    <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="idea" className="idea-img" />
                                    <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="idea" className="idea-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination-links">
                        <div className="pagination-link active-background">1</div>
                        <div className="pagination-link">2</div>
                        <div className="pagination-link">3</div>
                        <div className="pagination-link">4</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Ideas;