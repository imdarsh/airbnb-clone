import { FavoriteBorder } from '@material-ui/icons'
import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import './SearchResult.css'

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total
}){
    return(
        <div class="searchResult">
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchResult_heart" />
            <div className="searchResult_info">
                <div className="searchResult_infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>
                <div className="searchResult_stars">
                    <StarIcon className="searchResult_star" />
                    <p>
                        <strong>{star}</strong>
                    </p>
                </div>
                <div className="searchResults_price">
                    <h2>{price}</h2>
                    <p>{total}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchResult