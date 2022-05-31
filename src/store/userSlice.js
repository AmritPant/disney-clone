import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User Slice",
  default: { name: "", photo: "", email: "" },
  reducers: {
    setName(state, action) {
      state.name = action.payload.name;
    },
  },
});
