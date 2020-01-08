import React from 'react';

const Main = (props) => {

    const saveFav = (url, name, pairing, id) => {
        // console.log(url, name)
        props.handleFavourites(url, name, pairing);
        document.getElementById(`buttonClick_${id}`).innerText = 'Added to Favs'
        document.getElementById(`buttonClick_${id}`).disabled = true;

    }

    // console.log(props.searchResult)
    let pictures = []
    if (props.searchResult) {
        pictures = props.searchResult.map(item => (<div key={item.name} className="pictures">
            <img src={item.image_url} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.tagline}</p>
            <p>{item.description}</p>
            <button className="button" id={`buttonClick_${item.id}`} type="button" onClick={() => saveFav(item.image_url, item.name, item.food_pairing, item.id)}>Add to Favourites</button>
            </div>));
        // console.log(pictures)
        return pictures
    }
    return (
        <div>
            {props.search && <p>You searched for: {props.search}</p>}
            {pictures}
        </div>
    )
}
export default Main;
