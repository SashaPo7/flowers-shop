import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  navigationItem: 'All',
  pageCount: 1,
  sortItem: {name:'price', sortProperty: 'price'},
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setNavigationItem(state, action) {
      state.navigationItem = action.payload;
    }, 
    setSortItem(state, action) {
      state.sortItem = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
    setFilters(state, action) {
      state.navigationItem = action.payload.navigationItem;
      state.sortItem = action.payload.sortItem;
      state.pageCount = Number(action.payload.pageCount); 
    }
  },
})

export const { setNavigationItem, setSortItem, setPageCount, setFilters } = filterSlice.actions;

export default filterSlice.reducer