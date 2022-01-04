import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../axios/API";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await API.get("/");
  console.log(response.data);
});

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    data: null,
  },
  reducers: {},
});

export default dataSlice.reducer;
