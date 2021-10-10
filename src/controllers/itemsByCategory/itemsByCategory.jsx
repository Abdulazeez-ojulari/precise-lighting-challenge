import axios from 'axios';
import React, { Component } from 'react';
import Filter from '../filter/filter';
import './itemsByCategory.css';

class ItemsByCategory extends Component {
    constructor(){
        super();

        this.state = {
            category: '',
            items: []
        }
    }

    componentDidMount(){
        this.setState({
            category: this.props.match.params.categoryName
        })
        this.getItemsByCategory()
    }

    getItemsByCategory(){
        let dummyData = [
            {
              id: 1,
              categoryName: 'indoor',
              itemName: 'PL-L028|1200 BK',
              itemPrice: '124270.00',
              itemImg: 'https://preciselighting.ng/pub/media/catalog/product/cache/cb4a6b3184aee87fe15ef4e8b97bd9d9/4/_/4_494_1.jpg',
              itemType: 'Dining Light',
              images: [
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/1/_/1_677_1.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/2/_/2_689_1.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/3/_/3_592_1.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/6/_/6_264_1.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/5/_/5_444_1.jpg',
              ],
              rating: 4,
              color: 'white',
              sku: 432,
              availability: 'in stock',
              itemCode: 3021
            },
            {
              id: 2,
              categoryName: 'indoor',
              itemName: 'PL-L031|600+400 BK 60W',
              itemPrice: '30000.00',
              itemImg: 'https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg',
              itemType: 'Ceiling Light',
              images: [
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/1/_/1_677_1.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/2/_/2_689_1.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/3/_/3_592_1.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/6/_/6_264_1.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/5/_/5_444_1.jpg',
              ],
              rating: 4,
              color: 'yellow',
              sku: 432,
              availability: 'in stock',
              itemCode: 3021
            },
            {
              id: 3,
              categoryName: 'indoor',
              itemName: 'PL-L057|12 COPPER',
              itemPrice: '54000.00',
              itemImg: 'https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg',
              itemType: 'Ceiling Light',
              images: [
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/1/_/1_2__34.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/1/_/1_674.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/2/_/2_686.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/3/_/3_589.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/4/_/4_494.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/5/_/5_444.jpg',
              ],
              rating: 5,
              color: 'yellow',
              sku: 432,
              availability: 'in stock',
              itemCode: 3021
            },
            {
              id: 4,
              categoryName: 'indoor',
              itemName: 'PL-L058|6 COPPER',
              itemPrice: '21000.00',
              itemImg: 'https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg',
              itemType: 'Ceiling Light',
              images: [
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/1/_/1_2__34.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/1/_/1_674.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/2/_/2_686.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/3/_/3_589.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/4/_/4_494.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/5/_/5_444.jpg',
              ],
              rating: 4,
              color: 'yellow',
              sku: 432,
              availability: 'in stock',
              itemCode: 3021
            },
            {
              id: 5,
              categoryName: 'indoor',
              itemName: 'PL-ZL2500|750 COPPER',
              itemPrice: '32000.00',
              itemImg: 'https://preciselighting.ng/pub/media/catalog/product/cache/cb4a6b3184aee87fe15ef4e8b97bd9d9/2/_/2_686.jpg',
              itemType: 'Dining Light',
              images: [
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/1/_/1_2__34.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/1/_/1_674.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/2/_/2_686.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/3/_/3_589.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/4/_/4_494.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/5/_/5_444.jpg',
              ],
              rating: 3,
              color: 'yellow',
              sku: 432,
              availability: 'in stock',
              itemCode: 4663
            },
            {
              id: 6,
              categoryName: 'indoor',
              itemName: 'Linear Vertical LED Hanging Light',
              itemPrice: '68000.00',
              itemImg: 'https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_70.jpg',
              itemType: 'Ceiling Light',
              images: [
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/1/_/1_2__34.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/1/_/1_674.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/2/_/2_686.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/3/_/3_589.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/4/_/4_494.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/5/_/5_444.jpg',
              ],
              rating: 4,
              color: 'yellow',
              sku: 432,
              availability: 'in stock',
              itemCode: 3021
            },
            {
              id: 7,
              categoryName: 'indoor',
              itemName: 'PL-ZL1840|12 BRONZE+BLACK',
              itemPrice: '271841.00',
              itemImg: 'https://preciselighting.ng/pub/media/catalog/product/cache/cb4a6b3184aee87fe15ef4e8b97bd9d9/2/_/2_685.jpg',
              itemType: 'Dinning Light',
              images: [
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/1/_/1_2__34.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/1/_/1_674.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/2/_/2_686.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/3/_/3_589.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/4/_/4_494.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/5/_/5_444.jpg',
              ],
              rating: 4,
              color: 'bronze',
              sku: 432,
              availability: 'in stock',
              itemCode: 3021
            },
            {
              id: 8,
              categoryName: 'outdoor',
              itemName: 'PL-K-2407 BK',
              itemPrice: '10965.00',
              itemImg: 'https://preciselighting.ng/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/4/_/4_60.jpg',
              itemType: 'Pathway Lighting',
              images: [
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/1/_/1_105.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/2/_/2_106.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/4/_/4_60.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/d/i/dimension_18.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/6/_/6_33.jpg',
                'https://preciselighting.ng/pub/media/catalog/product/cache/07687b5bb998787cce7f377dfb4fe4f1/7/_/7_4.jpg',
              ],
              rating: 4,
              color: 'yellow',
              sku: 432,
              availability: 'in stock',
              itemCode: 2898
            },
          ]
    
        axios.get('http://localhost:8000')
        .then(() => {
    
        }).catch(error => {
            this.setState({
                items: dummyData
            })
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

    rating(rate){
        // let rate = rate 
        var ulNode = document.createElement("ul");
        var liNode = document.createElement("li");
        var iNode = document.createElement("i");
        for(let i = 0; i<5; i++){
            if(rate > 0){
                iNode.className = 'fas fa-star';
                iNode.style.color = '#f0cc84';
                liNode.appendChild(iNode);
                ulNode.appendChild(liNode);
                rate--;
            }else{
                iNode.className = 'fas fa-star';
                iNode.style.color = '#e5e5e5';
                liNode.appendChild(iNode);
                ulNode.appendChild(liNode);
            }
        }

        return ulNode;
    }

    render(){
        const { category, items } = this.state;

        const itemsDetail = items.map(item => {
            return(
                <div onClick={(e) => this.selectItem(e, item)} key={item.id} className="category-item">
                    <a href={'/' + category + '/' + item.itemName }>
                    <img src={ item.itemImg } alt="Item" className="category-item-img" />
                    <h6 className="category-item-name">{ item.itemName }</h6>
                    <div className="category-item-price-rating">
                        <p className="category-item-price">{'#' + item.itemPrice }</p>
                        <ul className="category-item-rating">
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
                    </a>
                </div>
            )
        })
        return (
            <React.Fragment>
                <div className="itemscategory-header-container">
                    <div className="itemscategory-header">
                        <div className="itemscategory-header-row-1">
                            <ul className="itemscategory-header-pages">
                                <li className="itemscategory-header-page">Home</li>
                                <li className="itemscategory-header-page active-text">
                                    <a href={'/' + category + '/items'}>{ category }</a>
                                </li>
                            </ul>
                            <div className="itemscategory-header-share">
                                <i className="fas fa-share-alt itemscategory-header-share-icon"></i>
                                share
                            </div>
                        </div>
                        <div className="itemscategory-header-row-2">
                            <h3 className="itemscategory-header-category">
                                { category }
                            </h3>
                        </div>
                    </div>
                </div>
                <Filter text='Bestsellers'></Filter>
                
                <div className="category-items-container">
                    <div className="category-items">
                        { itemsDetail }
                    </div>
                </div>

                <div className="spinner-container">
                    <div className="spinner">
                        <div className="spinner-box box-1"></div>
                        <div className="spinner-box box-2"></div>
                        <div className="spinner-box box-3"></div>
                        <div className="spinner-box box-4"></div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default ItemsByCategory;