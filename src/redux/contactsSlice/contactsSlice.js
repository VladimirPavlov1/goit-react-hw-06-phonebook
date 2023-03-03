import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';
import {  persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";





const contactsSlice=createSlice({
    name:'contacts',
    initialState:{
      contacts:  [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
          ]
    },
    reducers:{
        addContacts(state,action){
          const {name,number} = action.payload;
            if (
                state.contacts.find(contact =>
                  contact.name.toLowerCase().includes(name.toLowerCase())
                )
              ) {
                alert(`${name} is already in contacts`);
                return;
              } else {
                state.contacts = [...state.contacts, { name, number, id: nanoid() }];
              }},
        deleteContacts(state,action){ 
            const contactId=action.payload
            state.contacts=state.contacts.filter(contact => contact.id !== contactId)}
       
    }
})

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist:['contacts']
  }

  export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);





export const {addContacts,deleteContacts} = contactsSlice.actions;

export const getContacts = state =>state.contacts.contacts

