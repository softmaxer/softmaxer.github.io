import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Topbar from "@/components/sidebar";
import SocialMediaTray from "@/components/media-tray";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sriram Vadlamani",
  description: "A portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-envycoder">
        <div className="flex flex-row justify-evenly">
          <Topbar />
          <main className="flex min-h-[calc(100dvh)] flex-col items-center justify-between p-44 w-full md:w-full sm:w-full lg:w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
