import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {useParams}  from "react-router-dom";
import Rating from '../Components/ui/Rating';
import Price from '../Components/ui/Price';
import Book from '../Components/ui/Book';

function BookInfo({ books, addToCart, cart }) {
    const { id } = useParams()
    // + converts id to a number
    const book = books.find((book) => +book.id === +id)

    const [added, setAdded] = useState(false)
    function addBookToCart(book) {
        addToCart(book)
    }

    function bookExistsOnCart(){
        setAdded(true)
        return cart.find((book) => book.id === +id)
        
}
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <a href="/books" className='book__link'>
                                <FontAwesomeIcon icon="arrow-left" />
                            </a>
                            <a href="/books" className='book__link'><h2 className='book__selected--title--top'>Books</h2></a>
                        </div>
                        <div className="book__selected">
                            <figure className='book__selected--figure'>
                                <img src={book.url} alt="" className='book__selected--img' />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">
                                    {book.title}
                                </h2>
                                <Rating rating={book.rating} />
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">
                                        Summary:
                                    </h3>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                        Odit perferendis quae quidem! Cumque, ipsa quaerat! Delectus 
                                        voluptate maxime quae voluptatem officia, nam exercitationem 
                                        labore molestias ut sunt laboriosam veniam velit!
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit perferendis 
                                        quae quidem! Cumque, ipsa quaerat! Delectus voluptate maxime quae 
                                        voluptatem officia, nam exercitationem labore molestias ut sunt laboriosam 
                                        veniam velit!
                                    </p>
                                </div>
                                {bookExistsOnCart() ? (
                                    <a href={`/cart`}>
                                        <button className="btn">Checkout</button></a>
                                ) : (
                                      <button className="btn" onClick={() => addBookToCart(book)}>
                                        Add To Cart
                                        </button>)
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>
                        </div>
                        <div className="books">
                            {
                                books
                                    .filter(book => book.rating === 5 && +book.id !== +id)
                                    .slice(0, 4)
                                    .map(book => <Book book={book} key={book.id} />)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BookInfo