import { configureStore } from "@reduxjs/toolkit";
import counterRd from './Createslice'

const store = configureStore({
    reducer:{
        counter:counterRd
    }
})

export default store

//hook used :
//useselector - to select the value
//usedispatched - it is used for selecting the actions performed in rudecer