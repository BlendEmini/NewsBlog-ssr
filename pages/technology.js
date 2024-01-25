// pages/technology.js

import React from "react";
import { supabase } from "@/lib/supabase";
import News from "@/components/News";
import "../app/globals.css";
import HamburgerMenu from "@/components/HamburgerMenu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

const TechnologyPage = ({ technologyData }) => {
    return (
        <div>
            <Navbar />
            <HamburgerMenu />
            <News blogs={technologyData} />
            <Footer />
        </div>
    );
};

export async function getServerSideProps() {
    // Fetch full data from Supabase
    const { data: technologyData, error } = await supabase
        .from("news")
        .select("*")
        .eq("category", "Technology");

    // Pass the full data as props to the page
    return {
        props: {
            technologyData,
        },
    };
}

export default TechnologyPage;
