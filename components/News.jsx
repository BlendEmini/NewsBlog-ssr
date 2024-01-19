import React from "react";
import BlogBox from "./BlogBox";
import Link from "next/link";

const News = ({ blogs }) => {
    return (
        <div className="flex pb-20 w-screen mt-5 lg:mt-9 justify-center flex-wrap gap-7">
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
