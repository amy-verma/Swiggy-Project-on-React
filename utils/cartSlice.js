import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            //Mutate state //immere takes of a new state
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
           
            return {items:[]};
        },
    },
}); 

//Extracting action and reducer from the slice
export const {addItem,removeItem,clearCart} =cartSlice.actions;

export default cartSlice.reducer;