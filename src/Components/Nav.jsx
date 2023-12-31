import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibrarLogo from '../assets/Library.svg';
import { Link } from "react-router-dom"


const Nav = ({ numberOfItems }) => {
    function openMenu(){
        document.body.classList += " menu--open"
    }

    function closeMenu (){
        document.body.classList.remove("menu--open")
    }

    return (
        <nav>
            <div className='nav__container'>
                <a href="/">
                    <img src={LibrarLogo} alt="" className='logo' />
                </a>
                <ul className='nav__links'>
                    <li className="nav__list">
                        <a href="/" className='nav__link'>Home</a>
                    </li>
                    <li className="nav__list">
                        <a href="/books" className='nav__link'>Books</a>
                    </li>
                    <button className='btn__menu' onClick={openMenu}>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className="nav__icon">
                        <a href="/cart" className='nav__link'>
                            <FontAwesomeIcon icon="shopping-cart" />
                        </a>
                        {
                            numberOfItems > 0 && <span className='cart__length'>{numberOfItems}</span>
                        }
                        
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                        <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                        <a href="/" className="menu__link">Home</a>
                        </li>
                        <li className="menu__list">
                            <a href="/books" className="menu__link">Books</a>
                        </li>
                        <li className="menu__list">
                            <a href="/cart" className="menu__link">Cart</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;