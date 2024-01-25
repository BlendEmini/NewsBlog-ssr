import { Inter } from "next/font/google";
import "./globals.css";
import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <NextSeo title="TESTASTSAs" />
            <body className={inter.className}>{children}</body>
        </html>
    );
}
