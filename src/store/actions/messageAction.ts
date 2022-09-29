import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../axiosConfig";
import { messageType } from "../reducers/Message";

export const sendMessage = createAsyncThunk(
  "message",
  async ({ name, mobileNumber, email, message }: messageType) => {
    const data = { name, mobileNumber, email, message };
    const response = await axiosInstance.post("/send", data);

    return response.data;
  }
);
