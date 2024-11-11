import {createSlice} from '@reduxjs/toolkit'
const productList = createSlice({
    name:"productInfo",
    initialState:{
        product:[],
        cartItem:[]
    },
    reducers:{
        addItem:(state,action)=>{
            console.log(action.payload)
            state.product.push(action.payload)
        },
        addToCart:(state,action)=>{
            const itemOne = action.payload
            const exsistingItem = state.cartItem.find((findCart)=>findCart.id === itemOne.id)
            if(exsistingItem){
                exsistingItem.quantity+=1
            }else{
                state.cartItem.push({...itemOne,quantity:1});
                console.log(itemOne)
            }
        }

    }
})
export const {addItem,addToCart} = productList.actions
export default productList.reducer