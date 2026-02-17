import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, clearCart, decreaseQuantity, increaseQuantity, removeItem } from './features/cart/cartSlice';

const App = () => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  return (    
    <div>
      <ul>
        {items.length === 0 ? (<li>Cart is Empty</li>) : (items.map((item) => {
          return <li key={item.id}>
            <p>Product name : {item.name}</p>
            <p>Price : ${item.price}</p>
            <p>Quantity : {item.quantity}</p>
            <button onClick={()=> dispatch(increaseQuantity(item))}>+</button>
            <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
            <button onClick={() => dispatch(removeItem(item))}>Remove Item</button>
          </li>
        }))}
      </ul>
      <p>Total Amount : ${totalAmount}</p>
      <button onClick={()=> { 
        const obj = {
          id : Number(prompt("Enter id: ")),
          name : prompt("Enter Product name: "),
          price : Number(prompt("Enter product price:")),
          quantity : 1
        }
        dispatch(addItem(obj))
      }}>Add Item</button>
      <button onClick={() => dispatch(clearCart())}>Delete Cart</button>
    </div>
  )
}

export default App