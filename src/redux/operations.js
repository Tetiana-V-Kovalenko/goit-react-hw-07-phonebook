import { createAsyncThunk } from '@reduxjs/toolkit';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async function (_, { rejectWithValue }) {
    try {
      const data = await fetch(
        'https://63c7d83a5c0760f69abf490d.mockapi.io/contacts/contacts'
      ).then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async function (contact, { rejectWithValue }) {
    try {
      const data = await fetch(
        `https://63c7d83a5c0760f69abf490d.mockapi.io/contacts/contacts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contact),
        }
      ).then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      });

      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function (contactId, { rejectWithValue }) {
    try {
      const data = await fetch(
        `https://63c7d83a5c0760f69abf490d.mockapi.io/contacts/contacts/${contactId}`,
        { method: 'DELETE' }
      ).then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      });

      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
