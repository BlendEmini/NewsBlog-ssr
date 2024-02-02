import React from "react";
import Image from "next/image";
import Ads from "../components/Ads";
import Link from "next/link";
import logo from "../assets/logolight1.png";
import { useSelector } from "react-redux";

const Hero = ({ blogs }) => {
    const darkMode = useSelector((state) => state.darkMode);

    const singleBlog = blogs[0];
    console.log(singleBlog);
    return (
        <div
            className={`flex  flex-col justify-center align-items-center ${
                darkMode
                    ? "bg-mainBgDark text-white "
                    : "bg-gray-100 text-black shadow-lg "
            } gap-3`}
        >
            <div className="relative gap-11 box-border py-3">
                <div className="relative cursor-pointer ">
                    <Link href={`/${singleBlog.id}`}>
                        <div className="md:w-800 w-96 h-56 hero-res-mid md:h-462 border1px border3px border-radius">
                            <Image
                                src={singleBlog.image || logo}
                                alt={`Image`}
                                className="md:w-800 w-96  h-56 md:h-462 border1px border3px border-radius"
                                layout="fill"
                                objectFit="cover"
                                priority={true}
                            />
                        </div>
                        <div
                            className={`absolute smallD box-border p-5 border1px border-radius gap-3 -bottom-40 w-350 lg:-bottom-10 left-10 flex md:w-478 md:h-243 ${
                                darkMode
                                    ? "bg-mainBgDark text-white "
                                    : "bg-gray-100 text-black shadow-lg "
                            } flex-col justify-between`}
                        >
                            <div className="w-28 py-1  bg-blueButton flex flex-col justify-items-center align-items-center box-border border-radius-btn">
                                <h6 className="text-white font-bold">
                                    {singleBlog.category || "CATEGORY"}
                                </h6>
                            </div>
                            <div>
                                <h2 className="lg:text-3xl text-xl fonts-custom">
                                    {singleBlog.title || "TITLE"}
                                </h2>
                            </div>
                            <div className="flex align-items-center justify-between">
                                <h5 className="text-sm w-28 text-gray-400">
                                    Created At:{" "}
                                    {singleBlog.created_at.slice(0, 10)}
                                </h5>
                                <div className="md:px-4 px-3 py-2 flex justify-center bg-blue-950 rounded-md">
                                    <h5 className="text-sm text-white font-bold">
                                        Latest News
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Ads />
            <h5 className="font-bold mt-6">LATEST NEWS</h5>
        </div>
    );
};

export default Hero;
