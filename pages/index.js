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
import configureStore from "@/redux/configureStore";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Cookie } from "next/font/google";

export default function Home({ blogs }) {
    const siteUrl = `https://news-blog-ssr.vercel.app/`;

    return (
        <>
            <Provider store={configureStore}>
                <NextSeo
                    title="American Lens News"
                    description="Welcome to American News! Our commitment is to offer dependable and diverse news coverage."
                    openGraph={{
                        title: "American Lens News",
                        description:
                            "Welcome to American News! Our commitment is to offer dependable and diverse news coverage.",
                        images: [
                            {
                                url: "https://lqnnbdfzslttudvlrywx.supabase.co/storage/v1/object/public/blogImages/Blogbox9.png",
                                width: 800,
                                height: 600,
                                alt: "Alternative text for the image",
                            },
                        ],
                        url: siteUrl,
                        type: "website",
                        site_name: "AmericanLensNews",
                    }}
                    facebook={{
                        appId: "61555201085700", // Replace with your Facebook App ID
                    }}
                />
                <div className="">
                    <Navbar />
                    <HamburgerMenu />
                    <Hero blogs={blogs} />
                    <News blogs={blogs} />

                    <Footer />
                </div>
            </Provider>
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
