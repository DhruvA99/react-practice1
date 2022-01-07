import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import API from "../../axios/API";

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    data: null,
    pincode: "",
  },
  reducers: {
    updatePincode: (state, action) => {
      state.pincode = action.payload;
    },
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.error = null;
    },
    [fetchData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { updatePincode } = dataSlice.actions;

export default dataSlice.reducer;
