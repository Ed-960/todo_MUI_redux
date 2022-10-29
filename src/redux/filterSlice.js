import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
   name: 'filteredTodos',
   initialState: {
      type: 'all',
      searchText: ''
   },
   reducers: {
      changeType(state, action) {
         state.type = action.payload.type;
      },
      onSearchText(state, action) {
         state.searchText = action.payload.searchText;
      }
   }
})

export const { changeType, onSearchText } = filterSlice.actions;
export default filterSlice.reducer; 