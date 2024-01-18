import Image from "next/image";
import LogoDark from "../assets/logodark1.png";
import LogoLight from "../assets/logolight1.png";
import SearchLogo from "../assets/search-outline.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
    const darkMode = false;
    return (
        <div
            className={`flex navbar items-center gap-12 justify-center p-7 ${
                darkMode ? "bg-mainBgDark text-white" : "bg-white text-black"
            }`}
        >
            <div>
                <Link href={"/"}>
                    <Image
                        alt="logo"
                        width={220}
                        height={52}
                        src={darkMode ? LogoDark : LogoLight}
                    />
                </Link>
            </div>
            <div className="flex flex-wrap gap-3">
                <a
                    href="/"
                    className={` text-lg ${
                        darkMode ? "text-white" : "text-text-scLightText"
                    }`}
                >
                    Homepage
                </a>
                <a
                    href="/blog/politics"
                    className={`text-lg ${
                        darkMode ? "text-white" : "text-scLightText"
                    }`}
                >
                    Politics
                </a>
                <a
                    href="/blog/sports"
                    className={`text-lg ${
                        darkMode ? "text-white" : "text-scLightText"
                    }`}
                >
                    Sports
                </a>
                <a
                    href="/blog/business"
                    className={`text-lg ${
                        darkMode ? "text-white" : "text-scLightText"
                    }`}
                >
                    Business
                </a>
                <a
                    href="/blog/technology"
                    className={`text-lg ${
                        darkMode ? "text-white" : "text-scLightText"
                    }`}
                >
                    Technology
                </a>
                <a
                    href="/blog/health"
                    className={`text-lg ${
                        darkMode ? "text-white" : "text-scLightText"
                    }`}
                >
                    Health
                </a>
                <a
                    href="/blog/others"
                    className={`text-lg ${
                        darkMode ? "text-white" : "text-scLightText"
                    }`}
                >
                    Others
                </a>
            </div>
            <div>
                <div className="relative">
                    <form
                        action="/search"
                        method="GET"
                        className="flex items-center"
                    >
                        <input
                            className={`w-48 h-11 bg-transparent rounded border border-gray-300 px-4 ${
                                darkMode
                                    ? "text-white placeholder-gray-300"
                                    : "text-black bg-scLightBg placeholder-gray-500"
                            }`}
                            type="text"
                            name="query"
                            placeholder="Search..."
                        />
                        <button
                            type="submit"
                            className={`absolute right-0 top-1/2 transform -translate-y-1/2 mr-3 ${
                                darkMode ? "text-black" : "text-white"
                            }`}
                        >
                            <Image alt="search-icon" src={SearchLogo} />
                        </button>
                    </form>
                </div>
            </div>

            <button
                // onClick={toggleMode}
                className={`px-3 py-1 flex-wrap border-radius ${
                    darkMode
                        ? "bg-white text-black"
                        : "bg-mainBgDark text-white"
                }`}
            >
                <BsFillMoonStarsFill
                    // onClick={() => setDarkMode(!darkMode)}
                    className={`cursor-pointer text-2xl `}
                />
            </button>
        </div>
    );
};

export default Navbar;
