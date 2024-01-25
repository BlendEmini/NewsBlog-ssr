// pages/technology.js

import React from "react";
import { supabase } from "@/lib/supabase";
import News from "@/components/News";
import "../app/globals.css";
import HamburgerMenu from "@/components/HamburgerMenu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const TechnologyPage = ({ sportsData }) => {
    return (
        <div>
            <Navbar />
            <HamburgerMenu />
            <News blogs={sportsData} />
            <Footer />
        </div>
    );
};

export async function getServerSideProps() {
    // Fetch full data from Supabase
    const { data: sportsData, error } = await supabase
        .from("news")
        .select("*")
        .eq("category", "Sports");

    // Pass the full data as props to the page
    return {
        props: {
            sportsData,
        },
    };
}

export default TechnologyPage;
