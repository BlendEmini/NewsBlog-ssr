// configureStore.js
import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "@/redux/themeColor";
import Cookies from "js-cookie";

const initialState = {
    darkMode: Cookies.get("darkMode") === "true",
    // Add other initial state properties if needed
};

export default configureStore({
    reducer: {
        darkMode: darkModeReducer,
        // Add other reducers as needed
    },
    preloadedState: initialState,
});
