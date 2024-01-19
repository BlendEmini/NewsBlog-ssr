import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import "../app/globals.css";
import HamburgerMenu from "@/components/HamburgerMenu";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home({ blogs }) {
    return (
        <>
            <div className="flex flex-col justify-center align-items-center">
                <HamburgerMenu />
                <Navbar />
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