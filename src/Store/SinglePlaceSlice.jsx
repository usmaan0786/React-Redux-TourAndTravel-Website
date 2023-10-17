import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  IDLE: "idle",
  LOADING: "laoding",
  ERROR: "error",
});

export const fetchSinglePlaces = createAsyncThunk(
  "singlePlaces/fetch",
  async (id) => {
    const res = await fetch(`http://localhost:8000/places/${id.id}`);
    const data = await res.json();
    return data;
  }
);

export const EditItem = createAsyncThunk("places/Edit", async (newData) => {
  // Make a POST request to create the new item

  const response = await fetch(`http://localhost:8000/places/${newData.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });

  // Check if the response status is OK
  if (!response.ok) {
    throw new Error("Failed to create item");
  }

  // Parse and return the response data
  const data = await response.json();
  return data;
});

const singlePlaceSlice = createSlice({
  name: "singlePlace",
  initialState: {
    singlePlace: [],
    status: STATUS.IDLE,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSinglePlaces.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchSinglePlaces.fulfilled, (state, action) => {
        state.singlePlace = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchSinglePlaces.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      })
      .addCase(EditItem.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(EditItem.fulfilled, (state, action) => {
        state.singlePlace = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(EditItem.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },
});

export default singlePlaceSlice.reducer;
