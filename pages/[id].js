// pages/[id].js
import { useRouter } from "next/router";
import { supabase } from "../lib/supabase";
import SingleViewPage from "@/components/SingleViewPage";
import "../app/globals.css";
import Navbar from "@/components/Navbar";
import HamburgerMenu from "@/components/HamburgerMenu";
import Footer from "@/components/Footer";

export const metadata = {
    title: "...",
    description: "...",
};

const Article = ({ post }) => {
    const router = useRouter();
    const { id } = router.query;

    // Render your article content here
    return (
        <>
            <Navbar />
            <HamburgerMenu />
            <SingleViewPage singleBlogData={post} />
            <Footer />
        </>
    );
};

export async function getServerSideProps({ params }) {
    const { id } = params;

    // Fetch data from Supabase based on the article ID
    const { data: post, error } = await supabase
        .from("news")
        .select("*")
        .eq("id", id)
        .single();

    // If the article is not found, handle it by redirecting to a 404 page
    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post,
        },
    };
}

export default Article;
