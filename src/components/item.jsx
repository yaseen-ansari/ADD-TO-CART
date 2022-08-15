import React, { useContext, useState } from "react";
import { CartContext } from "./cart";
const Items = (props) => {

  const {removeItem , increment , decrement} = useContext(CartContext);
 // const [cartCount , setCartCount] = useState(0);
  
 //console.log('props', props)
  return (
    <>
      <div className="items-info cart">
        <div className="product-img">
          <img src={props.image}  alt="img"/>
        </div>
        <div className="title">
          <h2>{props.title}</h2>
          <div className="module line-clamp">
          {/* <p className="cart-desc">{props.description}</p> */}
          </div>
        </div>
        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={()=>decrement(props.id)}></i>
          {
            props.countId? <input type="text" name="" id="" value={props.countId}  /> : <input type="text" name="" id="" value={0}  />
          }
          {/* <input type="text" name="" id="" value={props.countId}  /> */}
          <i className="fas fa-plus plus" onClick={()=>increment(props.id)}></i>
        </div>
        <div className="price">
          <h3>{props.price} $</h3>
        </div>

        <div className="remove-item">
          <i className="fas fa-trash-alt remove" onClick={()=>removeItem(props.id)}></i>
        </div>
      </div>
      <hr/>
 
    </>
  );
};

export default Items;
