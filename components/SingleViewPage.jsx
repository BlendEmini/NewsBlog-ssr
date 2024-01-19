import React from "react";
import AdsMid from "./AdsMid";
import CategoryBtn from "./CategoryBtn";
import Image from "next/image";

const SingleViewPage = ({ singleBlogData }) => {
    const darkMode = false;
    if (!singleBlogData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div
                className={`flex box-border align-items-center ${
                    darkMode ? "bg-mainBgDark" : "bg-white"
                } flex-col justify-center`}
            >
                <AdsMid />
                <div className="box-border py-4">
                    <div className="flex box-border p-3 gap-4 max-w-3xl flex-col justify-center">
                        <div className="flex w-full justify-between">
                            <CategoryBtn category={singleBlogData.category} />
                            <div>
                                <h5
                                    className={`text-sm w-28 font-semibold text-gray-400 ${
                                        darkMode
                                            ? "group-hover:text-white"
                                            : "group-hover:text-mainBgDark"
                                    }`}
                                >
                                    Created At:{" "}
                                    {singleBlogData.created_at.slice(0, 10)}
                                </h5>
                            </div>
                        </div>
                        <div
                            className={`${
                                darkMode ? "text-white" : "text-mainBgDark"
                            } md:text-4xl text-3xl font-semibold`}
                        >
                            {singleBlogData.title}
                        </div>
                        <div>
                            <Image
                                className="md:max-w-3xl box-border md:max-h-400 border-radius-btn"
                                width={800}
                                height={100}
                                priority={true}
                                alt="IMG"
                                src={singleBlogData.image}
                            />
                        </div>
                        <div className="box-border p-3">
                            <h6
                                className={` ${
                                    darkMode
                                        ? "text-darkParagraphColor"
                                        : "text-lightParagraphColor"
                                } text-sm md:text-base font-normal`}
                            >
                                {singleBlogData.shortdescription}
                            </h6>
                            <br />
                            <h6
                                className={` ${
                                    darkMode
                                        ? "text-darkParagraphColor"
                                        : "text-lightParagraphColor"
                                } text-sm md:text-base font-normal`}
                            >
                                {singleBlogData.midDescription}
                            </h6>
                            <br />
                            <h6
                                className={` ${
                                    darkMode
                                        ? "text-darkParagraphColor"
                                        : "text-lightParagraphColor"
                                } text-sm md:text-base font-normal`}
                            >
                                {singleBlogData.description}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleViewPage;
