// pages/technology.js

import React from "react";
import { supabase } from "@/lib/supabase";
import News from "@/components/News";
import "../app/globals.css";
import HamburgerMenu from "@/components/HamburgerMenu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import configureStore from "@/redux/configureStore";
const TechnologyPage = ({ healthData }) => {
    return (
        <Provider store={configureStore}>
            <div>
                <Navbar />
                <HamburgerMenu />
                <News blogs={healthData} />
                <Footer />
            </div>
        </Provider>
    );
};

export async function getServerSideProps() {
    // Fetch full data from Supabase
    const { data: healthData, error } = await supabase
        .from("news")
        .select("*")
        .eq("category", "Health");

    // Pass the full data as props to the page
    return {
        props: {
            healthData,
        },
    };
}

export default TechnologyPage;
