import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./features/messages/messageSlice";


export default configureStore({
    reducer: {
        message: messageReducer,
    }
})