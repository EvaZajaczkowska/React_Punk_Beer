import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    searchBeer = (e) => {
        e.preventDefault();
        console.log(e.target.elements.input.value)
        const search = e.target.elements.input.value.trim();
        this.props.handleSearch(search)
        e.target.elements.input.value = ""
    }
    render() {
    return (    
    <div className='header'>
        <div className='container'>
            <h1 className="header__title">Punk Beer API</h1>
            <form onSubmit={this.searchBeer}>
                <input 
                className="search_input" 
                type="search" 
                placeholder="type in your search..." 
                name="input"></input>
                <button className="button" 
                type="submit" 
                name="submit"
                >
                Search
                </button>
            </form>
            <Link className="button" to='/favs'>Favourites</Link>
            <Link className="button" to='/'>Home</Link>
        </div>
    </div>
);
}
}
/* Header.defaultProps = { 
title: 'Punk Beer API'
}; */

export default Header