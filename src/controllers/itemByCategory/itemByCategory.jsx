import React, { Component } from 'react';
import './itemByCategory.css';

class ItemByCategory extends Component {
    constructor(){
        super();

        this.state = {
            filter: false,
            categoryName: '',
            itemName: '',
            item: {},
            images: []
        }
    }

    componentDidMount(){
        console.log(this.props)
        let item = JSON.parse(localStorage.getItem('currentItem'));
        this.setState({
            categoryName: this.props.match.params.categoryName,
            itemName: this.props.match.params.itemName,
            item: item,
            images: item.images,
        });
    }

    addToCart(e, item){

        if(localStorage.getItem('shoppingCart')){
            let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

            if(!shoppingCart[item.itemName]){
                item['quantity'] = 1;
                item['totalAmount'] = parseFloat(item.itemPrice) * item.quantity;
                shoppingCart[item.itemName] = item;
                localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
            }else{
                shoppingCart[item.itemName]['quantity']++;
                shoppingCart[item.itemName]['totalAmount'] = parseFloat(item.itemPrice) * shoppingCart[item.itemName]['quantity'];
                localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
            }
        }else{
            let shoppingCart = {};
            item['quantity'] = 1;
            item['totalAmount'] = parseFloat(item.itemPrice) * item.quantity;
            shoppingCart[item.itemName] = item;
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
        }
    }

    filter = () => {
        let filter = this.state.filter
        this.setState({
            filter: !filter
        })
    }

    render(){

        const { categoryName, itemName, item, images } = this.state;

        const thumbnails = images.map(image => {
            return (
                <img src={image} alt="Item" className="itemcategory-col-1-img" />
            )
        })

        const thumbnails2 = images.map(image => {
            return (
                <img src={image} alt="Item" className="itemcategory-col-3-row-1-row-2-img active" />
            )
        })

        return (
            <React.Fragment>
                <div className="itemcategory-header-container">
                    <div className="itemcategory-header">
                        <div className="itemcategory-header-row-1">
                            <ul className="itemcategory-header-pages">
                                <li className="itemcategory-header-page">Home</li>
                                <li className="itemcategory-header-page">
                                    <a href={'/' + categoryName + '/items'}>{ categoryName }</a>
                                </li>
                                {itemName.length > 0 && 
                                <li className="itemcategory-header-page active-text">
                                    <a href={'/' + categoryName + '/' + itemName }>{ itemName }</a>
                                </li>}
                            </ul>
                            <div className="itemcategory-header-share">
                                <i className="fas fa-share-alt itemcategory-header-share-icon"></i>
                                share
                            </div>
                        </div>
                        <div className="itemcategory-header-row-2">
                            <h3 className="itemcategory-header-category">
                                { categoryName }
                            </h3>
                        </div>
                        <div className="itemcategory-header-row-3">
                            <div className="itemcategory-header-row-3-col-1">
                                <ul className="itemcategory-rating">
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
                                <p className="numofreviews">{ item.rating } Reviews</p>
                            </div>
                            <div className="itemcategory-header-row-3-col-2">
                                <div className="itemcategory-header-row-3-col-2-col-1">
                                    <p className="sku">SKU:</p>
                                    <p className="sku-num">{ item.sku }</p>
                                </div>
                                <div className="itemcategory-header-row-3-col-2-col-1">
                                    <p className="availability">Availability:</p>
                                    <p className="avalability-ans">{ item.availability }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="itemcategory-container">
                    <div className="itemcategory">
                        <div className="itemcategory-col-1">
                            { thumbnails }
                        </div>
                        <div className="itemcategory-col-2">
                            <p className="itemcategory-col-2-p1">{'<'}</p>
                            <img src={ item.itemImg } alt="Item" className="itemcategory-col-2-img" />
                            <p className="itemcategory-col-2-p2">{'>'}</p>
                        </div>
                        <div className="itemcategory-col-3">
                            <div className="itemcategory-col-3-row-1">
                                <div className="itemcategory-col-3-row-1-row-1">
                                    <p className="itemcategory-col-3-row-1-row-1-p">Color:</p>
                                    <h6 className="itemcategory-col-3-row-1-row-1-h6">{ item.color }</h6>
                                </div>
                                <div className="itemcategory-col-3-row-1-row-2">
                                    { thumbnails2 }
                                </div>
                            </div>
                            <div className="itemcategory-col-3-row-2">
                                <div className="itemcategory-col-3-row-2-row-1">
                                    <p className="itemcategory-col-3-row-2-row-1-p">Product Code:</p>
                                    <h5 className="itemcategory-col-3-row-2-row-1-h5">#{ item.itemCode }</h5>
                                </div>
                                <div className="itemcategory-col-3-row-2-row-2">
                                    <div className="itemcategory-col-3-row-2-row-2-btn">Dispatched in 2 business days</div>
                                </div>
                                <div className="itemcategory-col-3-row-2-row-3">
                                    <p className="itemcategory-col-3-row-2-row-3-p">Dining placement</p>
                                </div>
                            </div>
                            <div className="itemcategory-col-3-row-3">
                                <h1 className="itemcategory-col-3-row-3-price">#{ item.itemPrice }</h1>
                                <div onClick={(e) => this.addToCart(e, item)} className="itemcategory-col-3-row-3-add-to-cart">Add to cart</div>
                                <i className="far fa-heart itemcategory-col-3-row-3-save"></i>
                                <i className="fas fa-balance-scale-right itemcategory-col-3-row-3-rate"></i>
                            </div>
                            <div className="itemcategory-col-3-row-4">
                                <div className="itemcategory-col-3-row-4-col">
                                    <i className="fas fa-truck itemcategory-col-3-row-4-col-icon"></i>
                                    Shipping & Delivery
                                </div>
                                <div className="itemcategory-col-3-row-4-col">
                                    <i className="fas fa-sync-alt itemcategory-col-3-row-4-col-icon"></i>
                                    Returns & Exchanges
                                </div>
                                <div className="itemcategory-col-3-row-4-col">
                                    <i className="far fa-envelope itemcategory-col-3-row-4-col-icon"></i>
                                    Ask a question
                                </div>
                            </div>
                            <div className="itemcategory-col-3-row-5">
                                <h4 className="itemcategory-col-3-row-5-h4">Guaranteed safe checkout</h4>
                                <div className="itemcategory-col-3-row-5-checkout-links">
                                    <h3 className="itemcategory-col-3-row-5-checkout-link">Klasha</h3>
                                    <h3 className="itemcategory-col-3-row-5-checkout-link">flutterwave</h3>
                                    <h3 className="itemcategory-col-3-row-5-checkout-link">paystack</h3>
                                </div>
                            </div>
                            <div className="itemcategory-col-3-row-6">
                                <h5 className="itemcategory-col-3-row-6-h5">Description</h5>
                            </div>
                            <div className="itemcategory-col-3-row-7">
                                <h5 className="itemcategory-col-3-row-7-h5">Additional Information</h5>
                            </div>
                            <div className="itemcategory-col-3-row-8">
                                <h5 className="itemcategory-col-3-row-8-h5">Reviews</h5>
                            </div>
                        </div>
                    </div>
                    <div className="related-items">
                        <div className="related-items-row-1">
                            <h3 className="related-items-row-1-h3">Related Products</h3>
                            <div className="related-items-row-1-arrows">
                                <p className="related-items-row-1-p"> {'<'} </p>
                                <p className="related-items-row-1-p"> {'>'} </p>
                            </div>
                        </div>
                        <div className="related-items-row-2">
                            <div className="related-item">
                                <a href='/'>
                                    <img src='https://preciselighting.ng/pub/media/wysiwyg/c_kitchen_cates-compressed.jpg' alt="Item" className="related-item-img" />
                                    {/* <div className="related-item-discount">-50%</div> */}
                                    <h6 className="related-item-name">PL-L028|1200 BK</h6>
                                    <div className="related-item-price-rating">
                                        <p className="related-item-price">#124270.00</p>
                                        <ul className="related-item-rating">
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
                                    </div>
                                </a>
                            </div>
                            <div className="related-item">
                                <a href='/'>
                                    <img src='https://preciselighting.ng/pub/media/wysiwyg/c_kitchen_cates-compressed.jpg' alt="Item" className="related-item-img" />
                                    {/* <div className="related-item-discount">-50%</div> */}
                                    <h6 className="related-item-name">PL-L028|1200 BK</h6>
                                    <div className="related-item-price-rating">
                                        <p className="related-item-price">#124270.00</p>
                                        <ul className="related-item-rating">
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
                                    </div>
                                </a>
                            </div>
                            <div className="related-item">
                                <a href='/'>
                                    <img src='https://preciselighting.ng/pub/media/wysiwyg/c_kitchen_cates-compressed.jpg' alt="Item" className="related-item-img" />
                                    {/* <div className="related-item-discount">-50%</div> */}
                                    <h6 className="related-item-name">PL-L028|1200 BK</h6>
                                    <div className="related-item-price-rating">
                                        <p className="related-item-price">#124270.00</p>
                                        <ul className="related-item-rating">
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
                                    </div>
                                </a>
                            </div>
                            <div className="related-item">
                                <a href='/'>
                                    <img src='https://preciselighting.ng/pub/media/wysiwyg/c_kitchen_cates-compressed.jpg' alt="Item" className="related-item-img" />
                                    {/* <div className="related-item-discount">-50%</div> */}
                                    <h6 className="related-item-name">PL-L028|1200 BK</h6>
                                    <div className="related-item-price-rating">
                                        <p className="related-item-price">#124270.00</p>
                                        <ul className="related-item-rating">
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
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ItemByCategory;