import { createSlice } from "@reduxjs/toolkit";
import { sendMessage } from "../actions/messageAction";
export interface messageType {
  name: string;
  mobileNumber: string;
  email: string;
  message: string;
}

const initialState: messageType = {
  name: "",
  mobileNumber: "",
  email: "",
  message: "",
};
const messageSlice = createSlice({
  name: "message",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [sendMessage.fulfilled.type]: (state, { payload }) => {
      return {
        ...state,
        name: payload.name,
        mobileNumber: payload.mobileNumber,
        email: payload.email,
        message: payload.message,
      };
    },
  },
});

export const {} = messageSlice.actions;
export default messageSlice.reducer;
