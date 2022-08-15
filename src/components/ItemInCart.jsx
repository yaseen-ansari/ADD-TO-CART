import React, { useContext, useRef, useState } from "react";
import Items from "./item";
import {CartContext} from './cart';

const ItemInCart = ()=>{
    // const item = useContext(CartContext); 
    const {addToCart ,item , clearCart , totalItem, totalAmount  } = useContext(CartContext); //destructuring becaue using reducer
  //  console.log(item , 'props')
    
    if(item.length == 0){

      return <>
      
      <header className="container">
      <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
         
          <p>{totalItem}</p>
        </div>
      </header>
      <section className="main-cart-section container-fluid">
        <div className="heading">
        <div>
        <h1>Shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem}</span> items in
          shppping cart
        </p>
        </div>
        
        <div className="card-total">
          <h3>
            Cart Total: <span>{parseInt(totalAmount)} $</span>
          </h3>
         
          <button className="clear-cart" onClick={clearCart}>CLEAR CART</button>
         

        </div>
        </div>

    </section>
    </>

    }

    return(
        <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
         
          <p>{totalItem}</p>
        </div>
      </header>
      <section className="main-cart-section container-fluid">
        <div className="heading">
        <div>
        <h1>Shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem}</span> items in
          shppping cart
        </p>
        </div>
        
        <div className="card-total">
          <h3>
            Cart Total: <span>{parseInt(totalAmount)} $</span>
          </h3>
         
          <button className="clear-cart" onClick={clearCart}>CLEAR CART</button>
         

        </div>
        </div>
        <div className="cart-items">
          <div className="cart-items-container">
           {
           item.map((val)=>{
             return <Items key={val.id} {...val}/>
           })
           }
          
          </div>
        </div>
        
      </section>
    </>
    )
}

export default ItemInCart;