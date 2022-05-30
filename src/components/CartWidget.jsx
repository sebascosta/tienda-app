import React from 'react';
import logo from '../logo.svg';
import cart from '../shopping-cart.png';
import '../assets/cart.css';

function CartWidget({items}) {
  return (
    <>
    <div className="cart">
    <img src={cart} width="40px" alt="logo"/>
    
    {items}
    </div>
    </>
  )
}

export default CartWidget