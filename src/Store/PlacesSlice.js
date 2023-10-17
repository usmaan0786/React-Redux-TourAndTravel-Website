import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  IDLE: "idle",
  LOADING: "laoding",
  ERROR: "error",
});

export const fetchPlaces = createAsyncThunk("places/fetch", async () => {
  const res = await fetch("http://localhost:8000/places");
  const data = await res.json();
  return data;
});

export const DeletePlaces = createAsyncThunk("places/delete", async (id) => {

  // Make a POST request to create the new item
  const response = await fetch(`http://localhost:8000/places/${id}`, {
    method: "DELETE",
  });

  // Check if the response status is OK
  if (!response.ok) {
    throw new Error("Failed to create item");
  }

  // Parse and return the response data
  const data = await response.json();
  console.log(data)
  return data;
});

export const createItem = createAsyncThunk(
  "places/create",
  async (newItemData) => {
    // Define the API endpoint URL where you want to create the new item
    const apiUrl = "http://localhost:8000/places";

    // Make a POST request to create the new item
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItemData),
    });

    // Check if the response status is OK
    if (!response.ok) {
      throw new Error("Failed to create item");
    }

    // Parse and return the response data
    const data = await response.json();
    return data;
  }
);

const placesSlice = createSlice({
  name: "places",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaces.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchPlaces.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchPlaces.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      })
      .addCase(createItem.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(createItem.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.status = STATUS.IDLE;
      })
      .addCase(createItem.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      })
      .addCase(DeletePlaces.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(DeletePlaces.fulfilled, (state, action) => {
        state.data.pop(action.payload);
        state.status = STATUS.IDLE;
      })
      .addCase(DeletePlaces.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },
});

export default placesSlice.reducer;
