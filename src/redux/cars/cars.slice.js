import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { carsOperations } from "./cars.operations";

const initialState = {
  cars: [],
  // drinksSearched: [],
  // favoriteCars: [],
  // totalFavorites: null,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(carsOperations.fetchCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cars.push(...payload);
      })

      .addMatcher(isAnyOf(carsOperations.fetchCars.pending), (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(carsOperations.fetchCars.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const carsReducer = carsSlice.reducer;
