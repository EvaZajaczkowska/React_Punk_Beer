import React from 'react';

const Main = (props) => {

    const saveFav = (url, name) => {
        // console.log(url, name)
        props.handleFavourites(url, name);

    }

    // console.log(props.searchResult)
    let pictures = []
    if (props.searchResult) {
        pictures = props.searchResult.map(item => (<div key={item.name} className="pictures">
            <img src={item.image_url} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.tagline}</p>
            <p>{item.description}</p>
            <button type="button" onClick={() => saveFav(item.image_url, item.name)}>Add To Favourite</button>
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
