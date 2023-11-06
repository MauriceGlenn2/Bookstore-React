import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Rating({ rating }) {
    return (
        <div className="book__rating">
            {
                //use new array to create a new array to map over stars
                //math.floor to pass in an int
                new Array(Math.floor(rating)).fill(5).map((_, index) => <FontAwesomeIcon icon='star' key={index} />)
            }
            {/* print half stars, if its not an int print half star */}
            {
                !Number.isInteger(rating) && <FontAwesomeIcon icon='star-half-alt' />
            }
        </div>
    )
}

export default Rating;