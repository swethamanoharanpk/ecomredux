import React from 'react'
import {useNavigate} from 'react-router-dom'

const Order = () => {
  const navigate = useNavigate()
  setTimeout(()=>{
    navigate('/')
  },3000)
  
  return (
    <div>
    <h3>Your Order Is Successfull</h3>
    </div>
  )
}

export default Order