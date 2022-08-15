import resolveStyles from "radium/lib/resolve-styles";
import React, { createContext, useEffect, useReducer , useState} from "react";
import "./cart.css";
import ContextCart from "./ContextCart";
import {products} from './product';
import {reducer} from './Reducer';

export const CartContext  = createContext();

const initialState = {
  item:[],
  totalItem: 0,
  totalAmount: 0,
  cartItem:[]
 
}

const Cart = (props) => {

 const [state , dispatch]  = useReducer(reducer , initialState); 

 useEffect(() => {

  fetchData();
}, []);

const fetchData = () => {
  fetch("https://fakestoreapi.com/products")
    .then(response => {
      return response.json()
    })
    .then(data => {
         return dispatch({
            type: "LOAD_ITEM"  ,
            payload:data
          })
    })
}

const removeItem =(id)=>{
   return dispatch({
     type: "REMOVE_ITEM",
     payload : id
   })
 }

 const clearCart = ()=>{
  
  return dispatch({
    type : 'CLEAR_CART'
  })
 }

 const increment = (id)=>{
    return dispatch({
      type:"INCREMENT",
      payload: id
    })
}

const decrement = (id)=>{
  return dispatch({
    type:"DECREMENT",
    payload: id,
  })
}

useEffect(()=>{
  dispatch({type : "GET_TOTAL"})
},[state.item])

  return (
    <>
    <CartContext.Provider value={{...state, removeItem , clearCart , increment , decrement }}>
      <ContextCart/>
    </CartContext.Provider>
    
    </>
  );
};

export default Cart;
