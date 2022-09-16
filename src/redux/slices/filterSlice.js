import { createSlice } from '@reduxjs/toolkit';
import { CATEGORIES_TYPE, SORT_TYPE } from '../../lib/const';

const initialState = {
  activeCategory: CATEGORIES_TYPE.all,
  activeSortType: SORT_TYPE.pop,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setActiveSortType(state, action) {
      state.activeSortType = action.payload;
    },
  },
});

export const { setActiveCategory, setActiveSortType } = filterSlice.actions;

export default filterSlice.reducer;
