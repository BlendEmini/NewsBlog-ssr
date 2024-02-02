// // darkModeSlice.js
// import { createSlice } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";

// const darkModeSlice = createSlice({
//     name: "darkMode",
//     initialState: Cookies.get("darkMode") === "true" ? true : false,
//     reducers: {
//         toggleDarkMode(state) {
//             const newState = !state;
//             Cookies.set("darkMode", newState, { expires: 365 }); // Set cookie to expire in 365 days
//             return newState;
//         },
//     },
// });

// export const { toggleDarkMode } = darkModeSlice.actions;
// export default darkModeSlice.reducer;
// darkModeSlice.js
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: Cookies.get("darkMode") === "true" ? true : false,
    reducers: {
        toggleDarkMode: (state) => {
            const newState = !state;
            Cookies.set("darkMode", newState, { expires: 365 });
            return newState;
        },
    },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
