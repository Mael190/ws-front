import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: "message",
    initialState: [
        {
            sender: 'me',
            data: 'test'
        }
    ],
    reducers: {
        addMessage: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const getAllMessages = (state) => state.message;

export const {
    addMessage
} = messageSlice.actions;

export default messageSlice.reducer;

