import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientLoadingProvider from "@/components/ClientLoadingProvider";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mi Portfolio",
    description: "Portfolio personal de desarrollo web",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${inter.className} bg-black text-white`}>
                <ClientLoadingProvider>
                    <AnimatedBackground />
                    <Navbar />
                    {children}
                </ClientLoadingProvider>
            </body>
        </html>
    );
}