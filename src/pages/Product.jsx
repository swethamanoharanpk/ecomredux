import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { MDBBadge} from 'mdb-react-ui-kit';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { addItem, addToCart } from '../redux/Itemslice';


function Product() {
  

  const [item,setItem] = useState([])
  const dispatch =  useDispatch()
  const cartCount = useSelector((state)=>state.productInfo.cartItem)
  console.log(cartCount.length)


  useEffect(()=>{
    axios("https://fakestoreapi.com/products").then((res)=>{console.log(res)
      setItem(res.data)
      dispatch(addItem(res.data))
    })
  },[])

  function toCart(items){
    dispatch(addToCart(items))
  
  }

  return (
    <div>


    <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>HOME 
          <a className='mx-3' href='#!'>
        <Link to={'/cart'}>{<MDBIcon fab icon="opencart" />}</Link>
        <MDBBadge color='danger' notification pill>
        {cartCount.length}
        </MDBBadge>
      </a></MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>





    <div className="container">
      <div className="row">
        {item.map((list, index) => {
          return (
            <div className="col-md-3 mb-4" key={index}>
              <MDBCard height='170px'>
                <MDBCardImage src={list.image} position="top" alt={list.title} height='250px'/>
                <MDBCardBody>
                  <MDBCardTitle>{list.title.slice(0,11)}</MDBCardTitle>
                  <MDBCardText>
                    ${list.price}
                  </MDBCardText>
                  <Link to={'/order'}><MDBBtn href="#" className='mb-1'>BUY NOW</MDBBtn></Link>
                  <MDBBtn href="#" onClick={()=>toCart(list)}>ADD TO CART</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          )
        })}
      </div>
    </div>
    </div>
    
  )
}

export default Product