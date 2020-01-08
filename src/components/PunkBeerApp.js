import React from 'react';
import Header from './Header'
import Main from './Main';
import Favourites from './Favourites';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


class PunkBeerApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: undefined,
            searchResult: undefined,
            favourites: []
        }
    }

    handleSearch = (search) => {
        // console.log(search)
        const  url = `https://api.punkapi.com/v2/beers?beer_name=${search}`;
        // console.log(url)
        fetch(url)
        .then(response => response.json())
        .then(resp => {
          console.log(resp);
          this.setState(() => ({ 
            search,  
            searchResult: resp })
          )
        });
    }

    handleFavourites = (url, name, pairing) => {
        // console.log(url, name)
        let favourites = {url: url,
            name: name,
            pairing: pairing
        }

        console.log(favourites)
        
        this.setState({ favourites: this.state.favourites.concat(favourites) }, () => console.log(this.state.favourites))
        };

    render() {
        return (
            <BrowserRouter>
            <div>
                <Header handleSearch={this.handleSearch} />
            </div>
            <Switch>
                <Route path='/' exact={true} render={props => <Main {...props} search={this.state.search} searchResult={this.state.searchResult} handleFavourites={this.handleFavourites} />} />
                <Route path='/favs' render={props => <Favourites {...props} favs={this.state.favourites} /> } />
            </Switch>
        </BrowserRouter>
        )
    }
}

export default PunkBeerApp
