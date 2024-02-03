import React from "react";
import AdsMid from "./AdsMid";
import CategoryBtn from "./CategoryBtn";
import Image from "next/image";
import { useSelector } from "react-redux";

const SingleViewPage = ({ singleBlogData }) => {
    const darkMode = useSelector((state) => state.darkMode);
    if (!singleBlogData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div
                className={`flex box-border align-items-center ${
                    darkMode ? "bg-mainBgDark" : "bg-gray-100"
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
                                        ? "text-white"
                                        : "text-lightParagraphColor"
                                } text-sm md:text-base font-normal font-family-single`}
                            >
                                {singleBlogData.shortdescription}
                            </h6>
                            <br />
                            <h6
                                className={` ${
                                    darkMode
                                        ? "text-white"
                                        : "text-lightParagraphColor"
                                } text-sm md:text-base font-normal font-family-single`}
                            >
                                {singleBlogData.midDescription}
                            </h6>
                            <br />
                            <h6
                                className={` ${
                                    darkMode
                                        ? "text-white"
                                        : "text-lightParagraphColor"
                                } text-sm md:text-base font-normal font-family-single`}
                            >
                                {singleBlogData.description}
                            </h6>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleViewPage;
