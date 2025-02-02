import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import {geistMono, geistSans} from "@/lib/fonts";
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/providers/LenisProvider";

export const metadata: Metadata = {
    title: "Nahid Portfolio",
    description: "Generated by Next.js and GSAP",
};

const paddingX: number = 4

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LenisProvider>
            <div className="w-full overflow-x-hidden">
                <div className={`px-${paddingX} lg:px-0`}>
                    <Appbar/>
                </div>
                {children}
                <div className={`px-${paddingX} lg:px-0`}>
                    <Footer/>
                </div>
            </div>
        </LenisProvider>
        </body>
        </html>
    );
}
