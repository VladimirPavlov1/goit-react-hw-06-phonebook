import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts(state, action) {
      const { name, number } = action.payload;
      if (
        state.contacts.find(contact =>
          contact.name.toLowerCase().includes(name.toLowerCase())
        )
      ) {
        alert(`${name} is already in contacts`);
        return;
      } else {
        state.contacts = [...state.contacts, { name, number, id: nanoid() }];
      }
    },
    deleteContacts(state, action) {
      state.contacts = state.contacts.filter(
        ({ id }) => id !== action.payload.id
      );
    },
    setFilter(state,action){
        state.filter=action.payload
    }
   
  },
});

export const { addContacts, deleteContacts, setFilter } =
  contactsSlice.actions;
