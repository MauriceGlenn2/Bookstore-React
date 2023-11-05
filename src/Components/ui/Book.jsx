import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Book({ book }) {
    return (
        <div className="book">
            <a href="/">
                <figure className='book__img--wrapper'>
                    <img src={book.url} alt="" className='book__img' />
                </figure>
            </a>
            <div className="book__title">
                <a href="/" className='book__title--link'>
                    {book.title}
                </a>
            </div>
            <div className="book__ratings">
                {
                    //use new array to create a new array to map over stars
                    //math.floor to pass in an int
                    new Array(Math.floor(book.rating)).fill(5).map((_, index) => <FontAwesomeIcon icon='star' key={index} />)
                }
                {/* print half stars, if its not an int print half star */}
                {
                    !Number.isInteger(book.rating) && <FontAwesomeIcon icon='star-half-alt' />
                }
            </div>
            <div className="book__price">
                {book.salePrice ? (
                    <>
                        <span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>
                        ${book.salePrice.toFixed(2)}
                    </>) : (
                    <>${book.originalPrice.toFixed(2)}</>
                )}
            </div>
        </div>
    )
}

export default Book