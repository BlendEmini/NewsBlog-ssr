// pages/technology.js

import React from "react";
import { supabase } from "@/lib/supabase";
import News from "@/components/News";
import "../app/globals.css";
import HamburgerMenu from "@/components/HamburgerMenu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const TechnologyPage = ({ othersData }) => {
    return (
        <div>
            <Navbar />
            <HamburgerMenu />
            <News blogs={othersData} />
            <Footer />
        </div>
    );
};

export async function getServerSideProps() {
    // Fetch full data from Supabase
    const { data: othersData, error } = await supabase
        .from("news")
        .select("*")
        .eq("category", "Others");

    // Pass the full data as props to the page
    return {
        props: {
            othersData,
        },
    };
}

export default TechnologyPage;
