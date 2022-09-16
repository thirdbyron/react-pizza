import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activePizzaTypes: [],
  activePizzaSizes: [],
};

const optionSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setTypes(state, action) {
      state.activePizzaTypes = [...action.payload];
    },
    setSizes(state, action) {
      state.activePizzaSizes = [...action.payload];
    },
    setActiveType(state, action) {
      const item = state.activePizzaTypes.find(
        (type) => type.id === action.payload.id,
      );
      item.activeType = action.payload.activeType;
    },
    setActiveSize(state, action) {
      const item = state.activePizzaSizes.find(
        (type) => type.id === action.payload.id,
      );
      item.activeSize = action.payload.activeSize;
    },
  },
});

export const { setActiveSize, setActiveType, setTypes, setSizes } =
  optionSlice.actions;

export default optionSlice.reducer;
