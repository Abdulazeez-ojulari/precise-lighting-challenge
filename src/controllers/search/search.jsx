import React, { Component } from 'react'
import './search.css';

class Search extends Component{
    constructor(){
        super();
        this.state = {
            search: false,
            categories: [],
            items: [],
            fillteredItems: [],
            isRecentlyViewed: false,
            recentlyViewed: [],
            isRecentlySearched: false,
            recentlySearched: [],
            filltered: false,
            searchInput: '',
        }
    }

    
    componentDidMount(){
        this.setState({
            categories: this.props.categories,
            items: this.props.items,
            selectedCategory: '',
        })
        this.generateSuggestion(this.props.items);
    }

    generateSuggestion = (items) => {
        var visited = JSON.parse(localStorage.getItem('visited'));
        var searched = JSON.parse(localStorage.getItem('searched'));
        if(localStorage.getItem('visited') && visited.length > 0){
            let recentlyViewed = items.filter(item => {
                for(let i=0; i<visited.length; i++){
                    if(item.itemName.toLowerCase().includes(visited[i].toLowerCase())){   
                        return item.itemName.toLowerCase().includes(visited[i].toLowerCase())
                    }
                }
                return 1
            })
            this.setState({
                isRecentlyViewed: true,
                recentlyViewed: recentlyViewed
            });
        }

        if(localStorage.getItem('searched') && searched.length > 0){
            let recentlySearched = items.filter(item => {
                for(let i=0; i<searched.length; i++){
                    if(item.itemName.toLowerCase().includes(searched[i].toLowerCase())){   
                        return item.itemName.toLowerCase().includes(searched[i].toLowerCase())
                    }
                }
                return 1
            })
            this.setState({
                isRecentlySearched: true,
                recentlySearched: recentlySearched
            });
        }
    }
    
    openSearch = () =>{
        let search = this.state.search;
        this.setState({
            search: !search
        })
    }

    search = () =>{
        let search = this.state.searchInput;
        let items = this.state.items;
        if(search.length !== 0 ){
            let fillteredItems = items.filter(item => {
                return item.itemName.toLowerCase().includes(search.toLowerCase())
            });
            console.log(search)
            if(localStorage.getItem('searched')){
                let searched = JSON.parse(localStorage.getItem('searched'));
                let find = false;
                for(let i=0; i<searched.length; i++){
                    if(search === searched[i]){
                        find = true
                    }
                }
    
                if(!find){
                    searched.push(search);
                    localStorage.setItem('searched', JSON.stringify(searched))
                }
            }else{
                let searched = [];
                searched[0] = search;
                localStorage.setItem('searched', JSON.stringify(searched))
            }

            this.setState({
                searchInput: '',
                filltered: true,
                fillteredItems: fillteredItems
            })
        }else{
            this.setState({
                filltered: false,
            })
        }
    }
    
    selectCategory = (e) =>{
        let category = e.target.value;
        this.setState({
            selectedCategory: category,
        });
        let items = this.state.items;

        if(category.length !== 0){
            let fillteredItems = items.filter(item => {
                return item.categoryName.toLowerCase().includes(category.toLowerCase())
            })
            
            this.setState({
                filltered: true,
                fillteredItems: fillteredItems
            })
        }else{
            this.setState({
                filltered: false
            })
        }
    }

    searchItem = (e) =>{
        let searchInput = e.target.value;
        let items = this.state.items;
        if(searchInput.length !== 0 ){
            let fillteredItems = items.filter(item => {
                return item.itemName.toLowerCase().includes(searchInput.toLowerCase())
            });
            
            this.setState({
                searchInput: searchInput,
                filltered: true,
                fillteredItems: fillteredItems
            })
        }else{
            this.setState({
                filltered: false,
            })
        }
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
        const {categories, fillteredItems, filltered, isRecentlyViewed, recentlyViewed, isRecentlySearched, recentlySearched } = this.state;

        const categoryOptions = categories.map(category => {
            return(
                <option key={category.id} value={category.name}>{category.name}</option>
            )
        })

        const suggestedItems = fillteredItems.map(item => {
            return(
                <a key={ item.id } onClick={(e) => this.selectItem(e, item)} href={'/' + item.categoryName + '/' + item.itemName }>
                    <div className="itemSuggestion">
                        <img src={ item.itemImg } alt={ item.itemName } className="itemSuggestionImg" />
                        <div className="itemSuggestionDetails">
                            <p className="itemSuggestionName">{ item.itemName }</p>
                            <p className="itemSuggestionPrice">#{ item.itemPrice }</p>
                        </div>
                    </div>
                </a>
            )
        })

        const recentlyViewedItems = recentlyViewed.map(item => {
            return(
                <a key={item.id} onClick={(e) => this.selectItem(e, item)} href={'/' + item.categoryName + '/' + item.itemName }>
                    <div className="itemSuggestion">
                        <img src={ item.itemImg } alt={ item.itemName } className="itemSuggestionImg" />
                        <div className="itemSuggestionDetails">
                            <p className="itemSuggestionName">{ item.itemName }</p>
                            <p className="itemSuggestionPrice">#{ item.itemPrice }</p>
                        </div>
                    </div>
                </a>
            )
        })

        const recentlySearchedItems = recentlySearched.map(item => {
            return(
                <a key={item.id} onClick={(e) => this.selectItem(e, item)} href={'/' + item.categoryName + '/' + item.itemName }>
                    <div className="itemSuggestion">
                        <img src={ item.itemImg } alt={ item.itemName } className="itemSuggestionImg" />
                        <div className="itemSuggestionDetails">
                            <p className="itemSuggestionName">{ item.itemName }</p>
                            <p className="itemSuggestionPrice">#{ item.itemPrice }</p>
                        </div>
                    </div>
                </a>
            )
        })

        return(
            <div className="navbar-search-container">
                <div className="navbar-search">
                    <div className="navbar-search-col-1">
                        <p className="navbar-search-col-1-p">Search</p>
                        <i onClick={this.props.openSearch} className="fas fa-times navbar-search-col-1-cancel"></i>
                    </div>
                    <div className="navbar-search-col-2">
                        <select onChange={this.selectCategory} className='filterByCategory' name="category" id="category">
                            <option value="">All Category</option>
                            { categoryOptions }
                        </select>
                        <div className="searchBox">
                            <input onChange={this.searchItem} placeholder='What are you looking for?' type="text" name="search" id="search" className="searchInput" />
                            <i onClick={this.search} className="fas fa-search searchIcon"></i>
                        </div>
                    </div>
                    { !filltered ? 
                    <div className="navbar-search-col-3">
                        <h4 className="suggestion">Need Some Inspiration?</h4>
                        <div className="itemsSuggestionContainer">
                            {isRecentlyViewed && 
                            <React.Fragment>
                                <p className="suggestionType">Recently Viewed</p>
                                { recentlyViewedItems }
                            </React.Fragment>
                            }
                            {isRecentlySearched && 
                            <React.Fragment>
                                <p className="suggestionType">Recently Searced</p>
                                { recentlySearchedItems }
                            </React.Fragment>
                            }
                        </div>
                    </div> :
                    <div className="navbar-search-col-3">
                        <h4 className="suggestion">Items Found</h4>
                        <div className="itemsSuggestionContainer">
                            { suggestedItems }
                        </div>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default Search;