import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import "../app/globals.css";
import HamburgerMenu from "@/components/HamburgerMenu";
import News from "@/components/News";
import Footer from "@/components/Footer";
import { NextSeo } from "next-seo";
import img1 from "../assets/logodark1.png";
export default function Home({ blogs }) {
    return (
        <>
            <NextSeo
                title="TESTTESTTEST"
                description="AmericanLensNews"
                openGraph={{
                    title: "TESTTESTTEST",
                    description: "AmericanLensNews",
                    images: [
                        {
                            url: img1,
                            width: 800,
                            height: 600,
                            alt: "Alternative text for the image",
                        },
                    ],
                }}
                // You can add more meta tags or customize SEO settings here
            />
            <div className="">
                <Navbar />
                <HamburgerMenu />
                <Hero blogs={blogs} />
                <News blogs={blogs} />
                <Footer />
            </div>
        </>
    );
}
export async function getServerSideProps() {
    try {
        // Fetch data from Supabase
        const { data: blogs, error } = await supabase
            .from("news")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            throw error;
        }

        return {
            props: {
                blogs: blogs || [],
            },
        };
    } catch (error) {
        console.error("Error fetching data from Supabase:", error.message);
        return {
            props: {
                blogs: [],
            },
        };
    }
}
