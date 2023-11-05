import React from 'react'
import { books } from '../data'
import Book from './ui/Book.jsx'

function Discounted() {
  return (
    <section id="recent">
        <div className="container">
            <div className="row">
                <h2 className="section__title">

                    Discounted <span className='purple'>Books</span>
                </h2>
                <div className="books">

                    {
                        books
                        //only show discounted books
                        .filter(book => book.salePrice > 0)
                        //show first 8
                        .slice(0, 8)
                        //map over to get HTML on page with component
                        .map(book => <Book book={book} key={book.id}/>)
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Discounted