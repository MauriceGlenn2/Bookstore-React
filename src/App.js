import Nav from "./Components/Nav.jsx";
import "./index.css"
import Footer from "./Components/Footer.jsx";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./Pages/Home.jsx";
import Books from "./Pages/Books.jsx";
import { books } from "./data"
import BookInfo from "./Pages/BookInfo.jsx";
import Cart from "./Pages/Cart.jsx";
import React, { useEffect, useState } from "react";


function App() {
  //cart functionality
  const [cart, setCart] = useState([])

  //logs empty array
  function addToCart(book){
   setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity){
    setCart(
      cart.map((item) => item.id === book.id
      ? {
        ...item,
          quantity: +quantity,
        } : item
    )
    )
  }

 function removeItem(item) {
  setCart(cart.filter(book => book.id !== item.id))
 }

 function numberOfItems(){
  let counter = 0
  cart.forEach(item =>{
    counter += item.quantity
  })
  return counter
 }

 useEffect(() => {
  console.log(cart)
 }, [cart])


  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Route path="/" exact component={Home} />
        {/* sending props to the route */}
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books} addToCart={addToCart} cart={cart} />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart
              books={books}
              cart={cart}
              changeQuantity={changeQuantity}
              removeItem={removeItem}
            />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
