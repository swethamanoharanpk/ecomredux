import { configureStore } from "@reduxjs/toolkit";
import productList from './Itemslice'


export default configureStore({
    reducer:{
        productInfo:productList
    }
})