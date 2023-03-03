import { createSlice } from '@reduxjs/toolkit'

export const filterSlice=createSlice({
    name:'filter',
    initialState:'',
    reducers:{
        getValueFromChange(state,action){
           return state=action.payload
        }
    },
})


export const {getValueFromChange} = filterSlice.actions;

export const getFilter = state=>state.filter