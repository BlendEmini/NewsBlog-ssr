import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "@/redux/themeColor";

export default configureStore({
    reducer: {
        darkMode: darkModeReducer, // Add the dark mode reducer here
        // Add other reducers as needed
    },
});
