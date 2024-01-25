// pages/technology.js

import React from "react";
import { supabase } from "@/lib/supabase";
import News from "@/components/News";
import "../app/globals.css";
import HamburgerMenu from "@/components/HamburgerMenu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const TechnologyPage = ({ politicsData }) => {
    return (
        <div>
            <Navbar />
            <HamburgerMenu />
            <News blogs={politicsData} />
            <Footer />
        </div>
    );
};

export async function getServerSideProps() {
    // Fetch full data from Supabase
    const { data: politicsData, error } = await supabase
        .from("news")
        .select("*")
        .eq("category", "Politics");

    // Pass the full data as props to the page
    return {
        props: {
            politicsData,
        },
    };
}

export default TechnologyPage;
