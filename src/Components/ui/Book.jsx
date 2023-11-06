import React, { useEffect, useRef, useState } from 'react'
import Rating from './Rating'
import Price from './Price'


function Book({ book }) {
    const [img, setImg] = useState()

//components wont rerender when mounted
    const mountedRef = useRef(true)

    useEffect(() =>{
        const image = new Image()
        image.src = book.url
        image.onload = () => {
            setTimeout(()=>{
                if (mountedRef.current){
                    setImg(image)
                }           
            }, 3000)
        }
        return () => {
            //when componet unmounts
            mountedRef.current = false
        }
    })


    return (
        <div className="book">

            {
                img ?   <> <a href={`/books/${book.id}`}>
                <figure className='book__img--wrapper'>
                    <img src={img.src} alt="" className='book__img'/>
                </figure>
            </a>
            <div className="book__title">
                <a href={`/books/${book.id}`} className='book__title--link'>
                    {book.title}
                </a>
            </div>
            <Rating rating={book.rating}/>
                    <Price salePrice={book.salePrice} originalPrice={book.originalPrice} /> </>
                    : <><div className="book__img--skeleton"></div>
                        <div className="skeleton book__title--skeleton"></div>
                        <div className="skeleton book__rating--skeleton"></div>
                        <div className="skeleton book__price--skeleton"></div> </>
            }
            
            
         
        </div>
    )
}

export default Book