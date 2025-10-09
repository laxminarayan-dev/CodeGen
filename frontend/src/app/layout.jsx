import { Geist, Geist_Mono } from "next/font/google";
import "../css/globals.css";
import Navbar from "@/components/shared/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CodeGen",
  description: "Generates Code for You",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ background: "white", color: "black" }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
