"use client";
import React from "react";

const Footer = () => {
    return (
        <div className="">
            <div className="w-screen footer-ov bg-footerBG text-white box-border p-7 flex flex-wrap justify-start md:justify-center ">
                <div className="flex gap-3 flex-wrap justify-center">
                    <div className="w-72 box-border p-4  h-60 flex flex-col align-items-start">
                        <strong>About</strong>
                        <p>
                            Welcome to American News! We're dedicated to
                            providing dependable and diverse news coverage,
                            ensuring you stay informed.
                        </p>
                        <br></br>
                        {/* <strong>Email:</strong>
                        <strong>Phone:</strong> */}
                    </div>
                    <div className="box-border p-5 flex  flex-col h-60">
                        <strong>Category</strong>
                        <a>Homepage</a>
                        <a>Politics</a>
                        <a>Business</a>
                        <a>Health</a>
                        <a>Sports</a>
                        <a>Technology</a>
                        <a>Others</a>
                    </div>
                    <div className="w-72 flex flex-col gap-3 align-items-center h-60 box-border p-6">
                        <strong>Weekly Newsletter</strong>
                        <p>Get blog articles and offers via Email</p>
                        <input
                            className="box-border p-2 border1pxBoxDark  w-52"
                            placeholder="Email"
                        />
                        <button className="box-border p-2 bg-blueButton text-white border1pxBoxDark w-52">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
