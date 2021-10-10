import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount(){
        
        this.setState({
            items: JSON.parse(localStorage.getItem('items'))
        })
    }

    selectItem = (e, item) => {
        if(localStorage.getItem('visited')){
            let visited = JSON.parse(localStorage.getItem('visited'));
            let find = false;
            for(let i=0; i<visited.length; i++){
                if(item.itemName === visited[i]){
                    find = true
                }
            }

            if(!find){
                visited.push(item.itemName);
                localStorage.setItem('visited', JSON.stringify(visited))
            }
        }else{
            let visited = [];
            visited[0] = item.itemName;
            localStorage.setItem('visited', JSON.stringify(visited))
        }
        localStorage.setItem('currentItem', JSON.stringify(item));
        
    }

    render(){
        const { items } = this.state;

        const itemsDetail = items.map(item => {
            return(
                <div onClick={(e) => this.selectItem(e, item)} key={item.id} className="home-category-item">
                    <a href={'/' + item.categoryName + '/' + item.itemName }>
                    <img src={ item.itemImg } alt="Item" className="home-category-item-img" />
                    <div className="home-item-discount">-50%</div>
                    <h6 className="home-category-item-name">{ item.itemName }</h6>
                    <div className="home-category-item-price-rating">
                        <p className="home-category-item-price">{'#' + item.itemPrice }</p>
                        <ul className="home-category-item-rating">
                            {
                                Array.from({ length: 5 }).map((i,j) => {
                                    var rate = item.rating;
                                    if((j+1) <= rate){
                                        return(
                                            <li key={j}><i className="fas fa-star" style={{ color: '#f0cc84' }}></i></li>
                                        )
                                    }else{
                                        return(
                                            <li key={j}><i className="fas fa-star" style={{ color: '#e5e5e5' }}></i></li>)
                                    }
                                })
                            }
                        </ul>
                    </div>
                    <div className="home-item-hover">
                        <h6 className="home-category-item-name">{ item.itemName }</h6>
                        <div className="home-category-item-price-rating">
                            <p className="home-category-item-price">{'#' + item.itemPrice }</p>
                            <ul className="home-category-item-rating">
                                {
                                    Array.from({ length: 5 }).map((i,j) => {
                                        var rate = item.rating;
                                        if((j+1) <= rate){
                                            return(
                                                <li key={j}><i className="fas fa-star" style={{ color: '#f0cc84' }}></i></li>
                                            )
                                        }else{
                                            return(
                                                <li key={j}><i className="fas fa-star" style={{ color: '#e5e5e5' }}></i></li>)
                                        }
                                    })
                                }
                            </ul>
                        </div>
                        <div className="home-item-hover-images">
                            <img src="https://preciselighting.ng/pub/media/catalog/product/cache/cb4a6b3184aee87fe15ef4e8b97bd9d9/4/_/4_494_1.jpg" alt="light" className="home-item-hover-image" />
                            <img src="https://preciselighting.ng/pub/media/catalog/product/cache/cb4a6b3184aee87fe15ef4e8b97bd9d9/4/_/4_494_1.jpg" alt="light" className="home-item-hover-image" />
                            <img src="https://preciselighting.ng/pub/media/catalog/product/cache/cb4a6b3184aee87fe15ef4e8b97bd9d9/4/_/4_494_1.jpg" alt="light" className="home-item-hover-image" />
                            <img src="https://preciselighting.ng/pub/media/catalog/product/cache/cb4a6b3184aee87fe15ef4e8b97bd9d9/4/_/4_494_1.jpg" alt="light" className="home-item-hover-image" />
                        </div>
                        <div className="home-item-hover-sizes">
                            <div className="home-item-hover-size">XS</div>
                            <div className="home-item-hover-size">S</div>
                            <div className="home-item-hover-size">M</div>
                            <div className="home-item-hover-size">L</div>
                        </div>
                        <div className="home-item-hover-actions">
                            <a className="home-item-hover-button">Add to cart</a>
                            <i className="far fa-heart home-item-hover-icon"></i>
                            <i className="fas fa-balance-scale home-item-hover-icon"></i>
                        </div>
                    </div>
                    </a>
                </div>
            )
        })
        return (
            <React.Fragment>
                <div className="home-section-1">
                    <div className="header">
                        <div className="header-col-1">
                            <p className="header-col-1-p1">{'<'}</p>
                            <div className="header-btn">YOUR TITLE TEXT</div>
                            <img className='header-img' src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="light" />
                            <p className="header-col-1-p2">{'>'}</p>
                        </div>
                        <div className="header-col-2">
                            <div className="header-col-2-row-1">
                                <div className="header-col-2-row-1-col-1">
                                    <a href="/indoor/items">
                                        <div className="header-btn">INDOOR</div>
                                        <img className='header-img' src="https://preciselighting.ng/pub/media/wysiwyg/c_6_a4218a487ee21f31aff8abfe95c914ba-compressed_2_.jpg" alt="light" />
                                        <img src="https://preciselighting.ng/pub/media/wysiwyg/c_kitchen_cates-compressed.jpg" alt="light" className="header-hover-img" />
                                    </a>
                                </div>
                                <div className="header-col-2-row-1-col-2">
                                    <div className="header-btn">CEILING</div>
                                    <img className='header-img' src="https://preciselighting.ng/pub/media/wysiwyg/c_kitchen_cates-compressed.jpg" alt="light" />
                                </div>
                            </div>
                            <div className="header-col-2-row-2">
                                <div className="header-btn">BY ROOM</div>
                                <img className='header-img' src="https://preciselighting.ng/pub/media/wysiwyg/c_kitchen_cates-compressed.jpg" alt="light" />
                            </div>
                        </div>
                    </div>
                    <div className="packages">
                        <div className="package">
                            <i className="fas fa-truck package-icon"></i>
                            <h2 className="package-name">Nationwide Delivery</h2>
                            <p className="package-description">Express delivery around lagos</p>
                        </div>
                        <div className="package">
                            <i className="fas fa-sync-alt package-icon"></i>
                            <h2 className="package-name">7 Days Return</h2>
                            <p className="package-description">Simply return it after 7days for an exchange</p>
                        </div>
                        <div className="package">
                            <i className="far fa-life-ring package-icon"></i>
                            <h2 className="package-name">Support 24/7</h2>
                            <p className="package-description">Contact us 24 hours a day, 7 days a week</p>
                        </div>
                    </div>
                </div>
                <div className="home-section-2">
                    <div className="home-categories">
                        <div className="home-category">
                            <div className="home-category-row-1">
                                <h2 className="home-category-name">Ceiling Light</h2>
                                <ul className="home-category-filter-options">
                                    <a href="/" className="home-category--filter-option-link active-text">
                                        <li className="home-category-filter-option">New Arrival</li>
                                    </a><a href="/" className="home-category--filter-option-link">
                                        <li className="home-category-filter-option">Sales</li>
                                    </a><a href="/" className="home-category--filter-option-link">
                                        <li className="home-category-filter-option">Bestsellers</li>
                                    </a><a href="/" className="home-category--filter-option-link">
                                        <li className="home-category-filter-option">Most Viewed</li>
                                    </a><a href="/" className="home-category--filter-option-link">
                                        <li className="home-category-filter-option">Featured Products</li>
                                    </a>
                                </ul>
                            </div>
                            <div className="home-category-row-2">
                                <div className="home-category-items">
                                    { itemsDetail }
                                </div>
                            </div>
                            <button className="seeAll">See All</button>
                        </div>
                        <div className="home-category">
                            <div className="home-category-row-1">
                                <h2 className="home-category-name">Wall Light</h2>
                                <ul className="home-category-filter-options">
                                    <a href="/" className="home-category--filter-option-link active-text">
                                        <li className="home-category-filter-option">New Arrival</li>
                                    </a><a href="/" className="home-category--filter-option-link">
                                        <li className="home-category-filter-option">Sales</li>
                                    </a><a href="/" className="home-category--filter-option-link">
                                        <li className="home-category-filter-option">Bestsellers</li>
                                    </a><a href="/" className="home-category--filter-option-link">
                                        <li className="home-category-filter-option">Most Viewed</li>
                                    </a><a href="/" className="home-category--filter-option-link">
                                        <li className="home-category-filter-option">Featured Products</li>
                                    </a>
                                </ul>
                            </div>
                            <div className="home-category-row-2">
                                <div className="home-category-items">
                                    { itemsDetail }
                                </div>
                            </div>
                            <button className="seeAll">See All</button>
                        </div>
                    </div>
                </div>

                <div className="home-section-3">
                    <div className="home-news-s">
                        <div className="home-news">
                            <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="news" className='home-news-img' />
                            <div className="home-news-msg">
                                <p className="home-news-p">New Season</p>
                                <h3 className="home-news-h3">Lookbook Collection</h3>
                            </div>
                        </div>
                        <div className="home-news">
                            <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="news" className='home-news-img' />
                            <div className="home-news-msg">
                                <p className="home-news-p">Sale</p>
                                <h3 className="home-news-h3">Get up to <span className='text-pink'>50% off</span></h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-section-4">
                    <div className="home-subscribe">
                        <img src="https://preciselighting.ng/pub/media/catalog/product/cache/cb4a6b3184aee87fe15ef4e8b97bd9d9/2/_/2_685.jpg" alt="subscribe" className="home-subscribe-img-1" />
                        <div className="home-subscribe-form">
                            <p className="home-subscribe-form-p">Special Offer</p>
                            <h2 className="home-subscribe-form-h2">Subscribe</h2>
                            <h2 className="home-subscribe-form-h2">and <span className="text-pink">get # 5,000 off</span></h2>
                            <input type="text" className="home-subscribe-form-input" placeholder='Enter your email' />
                            <button className="home-subscribe-form-button">Subscribe</button>
                        </div>
                        <img src="https://preciselighting.ng/pub/media/catalog/product/cache/cb4a6b3184aee87fe15ef4e8b97bd9d9/2/_/2_685.jpg" alt="subscribe" className="home-subscribe-img-2" />
                    </div>
                </div>

                <div className="home-section-5">
                    <div className="home-users-review-container">
                        <h3 className="home-users-review-h3">Our Customer Reviews</h3>
                        <div className="home-users-review">
                            <div className="home-user-review">
                                <img src="https://preciselighting.ng/pub/media/wysiwyg/c_6_a4218a487ee21f31aff8abfe95c914ba-compressed_2_.jpg" alt="user" className="home-user-review-img" />
                                <h3 className="home-user-review-name">John Cena Doe</h3>
                                <ul className="home-user-review-rating">
                                    {/* {
                                        Array.from({ length: 5 }).map((i,j) => {
                                            var rate = item.rating;
                                            if((j+1) <= rate){
                                                return( */}
                                                    <li><i className="fas fa-star" style={{ color: '#f0cc84' }}></i></li>
                                                    <li><i className="fas fa-star" style={{ color: '#f0cc84' }}></i></li>
                                                    <li><i className="fas fa-star" style={{ color: '#f0cc84' }}></i></li>
                                                    <li><i className="fas fa-star" style={{ color: '#f0cc84' }}></i></li>
                                                {/* )
                                            }else{
                                                return( */}
                                                    <li><i className="fas fa-star" style={{ color: '#e5e5e5' }}></i></li>
                                            {/* }
                                        })
                                    } */}
                                </ul>
                                <div className="home-user-review-platform">
                                    <p className="home-user-review-platform-p">Posted On</p>
                                    <h3 className="home-user-review-platform-google">Google</h3>
                                </div>
                            </div>
                            <div className="home-user-review">
                                <img src="https://preciselighting.ng/pub/media/wysiwyg/c_6_a4218a487ee21f31aff8abfe95c914ba-compressed_2_.jpg" alt="user" className="home-user-review-img home-user-review-img-active" />
                                <h3 className="home-user-review-name">John Cena Doe</h3>
                                <ul className="home-user-review-rating">
                                    {/* {
                                        Array.from({ length: 5 }).map((i,j) => {
                                            var rate = item.rating;
                                            if((j+1) <= rate){
                                                return( */}
                                                    <li><i className="fas fa-star" style={{ color: '#f0cc84' }}></i></li>
                                                    <li><i className="fas fa-star" style={{ color: '#f0cc84' }}></i></li>
                                                    <li><i className="fas fa-star" style={{ color: '#f0cc84' }}></i></li>
                                                    <li><i className="fas fa-star" style={{ color: '#f0cc84' }}></i></li>
                                                {/* )
                                            }else{
                                                return( */}
                                                    <li><i className="fas fa-star" style={{ color: '#e5e5e5' }}></i></li>
                                            {/* }
                                        })
                                    } */}
                                </ul>
                                <div className="home-user-review-platform">
                                    <p className="home-user-review-platform-p">Posted On</p>
                                    <h3 className="home-user-review-platform-google">Google</h3>
                                </div>
                            </div>
                            <div className="home-user-review">
                                <img src="https://preciselighting.ng/pub/media/wysiwyg/c_6_a4218a487ee21f31aff8abfe95c914ba-compressed_2_.jpg" alt="user" className="home-user-review-img" />
                                <h3 className="home-user-review-name">John Cena Doe</h3>
                                <ul className="home-user-review-rating">
                                    {/* {
                                        Array.from({ length: 5 }).map((i,j) => {
                                            var rate = item.rating;
                                            if((j+1) <= rate){
                                                return( */}
                                                    <li><i className="fas fa-star" style={{ color: '#f0cc84' }}></i></li>
                                                    <li><i className="fas fa-star" style={{ color: '#f0cc84' }}></i></li>
                                                    <li><i className="fas fa-star" style={{ color: '#f0cc84' }}></i></li>
                                                    <li><i className="fas fa-star" style={{ color: '#f0cc84' }}></i></li>
                                                {/* )
                                            }else{
                                                return( */}
                                                    <li><i className="fas fa-star" style={{ color: '#e5e5e5' }}></i></li>
                                            {/* }
                                        })
                                    } */}
                                </ul>
                                <div className="home-user-review-platform">
                                    <p className="home-user-review-platform-p">Posted On</p>
                                    <h3 className="home-user-review-platform-google">Google</h3>
                                </div>
                            </div>
                        </div>
                        <div className="review-positions">
                            <div className="review-position"></div>
                            <div className="review-position current-position"></div>
                            <div className="review-position"></div>
                        </div>
                    </div>
                </div>

                <div className="home-section-6">
                    <div className="home-blogs-container">
                        <div className="home-blogs-row-1">
                            <h3 className="home-blogs-row-1-h3">Latest from blog</h3>
                            <p className="home-blogs-row-1-p">See all</p>
                        </div>
                        <div className="home-blogs-row-2">
                            <div className="home-blog">
                                <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="blog" className="home-blog-img" />
                                <div className="home-blog-details">
                                    <h3 className="home-blog-name">Kitchen Lighting</h3>
                                    <p className="home-blog-msg">Lighting plays a critical role in enhancing the apperance of any room. Even if your interior decor is...</p>
                                </div>
                            </div>
                            <div className="home-blog">
                                <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="blog" className="home-blog-img" />
                                <div className="home-blog-details">
                                    <h3 className="home-blog-name">Wedding Season</h3>
                                    <p className="home-blog-msg">Lighting plays a critical role in enhancing the apperance of any room. Even if your interior decor is...</p>
                                </div>
                            </div>
                            <div className="home-blog">
                                <img src="https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg" alt="blog" className="home-blog-img" />
                                <div className="home-blog-details">
                                    <h3 className="home-blog-name">Recent Favorites on Repeat</h3>
                                    <p className="home-blog-msg">Lighting plays a critical role in enhancing the apperance of any room. Even if your interior decor is...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;