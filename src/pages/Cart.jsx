import React, { useState } from 'react'
import { useSelector } from 'react-redux'


function Cart() {
    const cartDetails = useSelector((event)=>event.productInfo.cartItem)
    console.log(cartDetails)

    const[localQuantity,setLocalQuantity] = useState(cartDetails.map((item)=>item.quantity))

    const inc = (index) =>{
      const newQuantity = [...localQuantity];
      newQuantity[index] += 1;
      setLocalQuantity(newQuantity)

    }
    const dec = (index) =>{
      const newQuantity = [...localQuantity];
      newQuantity[index] -= 1;
      setLocalQuantity(newQuantity)

    }
  return (
    <div>
    {cartDetails.map((list,i)=>{
        return(
            <li>
            <img src={list.image} height="300px"></img>
            <h4>{list.title.slice(0,11)}</h4>
            <h5>${list.price}</h5>
            <span>
            <button onClick={()=>inc(i)}>+</button><p>Count:{localQuantity[i]}</p>
            <button onClick={()=>dec(i)}>-</button>
            </span>
            
            
            </li>
        )
    })}
    </div>
  )
}

export default Cart