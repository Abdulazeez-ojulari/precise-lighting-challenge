// import logo from './logo.svg';
import './App.css';
import './animations.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Home from './controllers/home/home';
import ItemsByCategory from './controllers/itemsByCategory/itemsByCategory';
import ItemByCategory from './controllers/itemByCategory/itemByCategory';
import Navbar from './controllers/navbar/navbar';
import React, { Component } from 'react';
import axios from 'axios';
import Footer from './controllers/footer/footer';
import ShoppingCart from './controllers/shoppingCart/shoppingCart';
import Checkout from './controllers/checkout/checkout';
import BookAnAppointment from './controllers/bookAnAppointment/bookAnAppointment';
import Ideas from './controllers/ideas/ideas';

class App extends Component {
  constructor(){
    super();
    this.state = {
      categories: [],
      items: []
    }
  }

  componentDidMount(){
    this.getCategories()
    this.getItems()
  }

  getItems = () => {
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
      localStorage.setItem('items' , JSON.stringify(dummyData));
      this.setState({
        items: dummyData
      })
    })
  }

  getCategories = () =>{
    let dummyData = [
      {
        id: 1,
        name: 'outdoor'
      },
      {
        id: 2,
        name: 'indoor'
      },
      {
        id: 3,
        name: 'switches and socket'
      },
      {
        id: 4,
        name: 'bulbs and co.'
      },
      {
        id: 5,
        name: 'appliances'
      },
      {
        id: 6,
        name: 'commercial'
      },
    ]

    axios.get('http://localhost:8000')
    .then(() => {

    }).catch(error => {
      this.setState({
        categories: dummyData
      })
    })
  }
  
  render(){
    const { categories, items } = this.state;
    return (
      <React.Fragment>
        { categories.length > 0 && items.length > 0 ?
        <Navbar categories={categories} items={items}></Navbar>
        : 
        <div className="spinner-container">
            <div className="spinner">
                <div className="spinner-box box-1"></div>
                <div className="spinner-box box-2"></div>
                <div className="spinner-box box-3"></div>
                <div className="spinner-box box-4"></div>
            </div>
        </div>
        }
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home items={items}></Home>
            </Route>
            <Route exact path='/:categoryName/items' component={ ItemsByCategory }></Route>
            <Route exact path='/:categoryName/:itemName' component={ ItemByCategory }></Route>
            <Route exact path='/shopping-cart' component={ ShoppingCart }></Route>
            <Route exact path='/checkout' component={ Checkout }></Route>
            <Route exact path='/book-an-appointment' component={ BookAnAppointment }></Route>
            <Route exact path='/ideas' component={ Ideas }></Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
