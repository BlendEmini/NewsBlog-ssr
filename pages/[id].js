// pages/[id].js
import { useRouter } from "next/router";
import { supabase } from "../lib/supabase";
import SingleViewPage from "@/components/SingleViewPage";
import "../app/globals.css";
import Navbar from "@/components/Navbar";
import HamburgerMenu from "@/components/HamburgerMenu";
import Footer from "@/components/Footer";
import { NextSeo } from "next-seo";
import { Provider, useSelector } from "react-redux";
import configureStore from "@/redux/configureStore";

const Article = ({ post }) => {
    const siteUrl = `https://news-blog-ssr.vercel.app/${post.id}`;
    const router = useRouter();
    const { id } = router.query;

    // Render your article content here
    return (
        <>
            <Provider store={configureStore}>
                <NextSeo
                    title={post.title}
                    description="AmericanLensNews"
                    openGraph={{
                        title: post.title,
                        description: post.shortdescription,
                        images: [
                            {
                                url: post.image,
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
                <Navbar />
                <HamburgerMenu />
                <SingleViewPage singleBlogData={post} />
                <Footer />
            </Provider>
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
