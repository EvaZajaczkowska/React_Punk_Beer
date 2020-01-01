import React from 'react';

const Favourites = (props) => {
    if ( props.fav !== {} ) {
    console.log(props)
    const favs = props.favs.map(item => (<div key={item.name} className="pictures">
    <img src={item.url} alt={item.name} />
    <p>{item.name}</p>
    </div>))
    return favs
    }
    return (
        <div>
        {favs}
        </div>
    )
}

export default Favourites;
