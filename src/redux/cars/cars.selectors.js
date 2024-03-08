  
  export const selectCars = (state) => {
    console.log('selectCars', state.carsStore.cars);
    return state.carsStore.cars;
  };
  
  export const selectFavoriteCars = (state) => {
    // console.log('selectFavoriteCars', state.carsStore.favoriteCars);
    return state.carsStore.favoriteCars;
  };
  
  export const selectTotalFavorites = (state) => {
    // console.log('selectTotalFavorites', state.carsStore.totalFavorites);
    return state.carsStore.totalFavorites;
  };

  
  export const selectIsLoadingCars = (state) => {
    // console.log('selectIsLoadingCars', state.carsStore.isLoading);
    return state.carsStore.isLoading;
  };
  
  export const selectError = (state) => {
    // console.log('selectError', state.carsStore.error);
    return state.carsStore.error;
  };
  
  export const selectIsLoading = (state) => {
    // console.log('selectIsLoading', state.carsStore.isLoading);
    return state.carsStore.isLoading;
  };
  