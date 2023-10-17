import { configureStore } from "@reduxjs/toolkit";
import placesReducer from "./PlacesSlice";
import singlePlaceReducer from "./SinglePlaceSlice";
const store = configureStore({
  reducer: {
    places: placesReducer,
    singleplace: singlePlaceReducer,
  },
});

export default store;
