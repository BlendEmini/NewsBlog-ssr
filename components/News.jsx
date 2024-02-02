import React from "react";
import BlogBox from "./BlogBox";
import Link from "next/link";
import { useSelector } from "react-redux";

const News = ({ blogs }) => {
    const darkMode = useSelector((state) => state.darkMode);
    return (
        <div
            className={`flex gap-6 pb-20 w-screen margin-top-0 lg:mt-9 ${
                darkMode
                    ? "bg-mainBgDark text-white "
                    : "bg-gray-100 text-black shadow-lg "
            } justify-center flex-wrap pt-7 `}
        >
            {blogs.map((box, index) => (
                <div key={index}>
                    <Link href={`/${box.id}`}>
                        <BlogBox blog={box} />
                    </Link>
                    <div className="md:hidden ">{/* <AdsMap /> */}</div>
                </div>
            ))}
        </div>
    );
};

export default News;
