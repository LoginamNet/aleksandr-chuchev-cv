import type { Metadata } from "next";

import "./globals.css";
import "./constants/colors.css";

import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";

import layout from "./layout.module.css";

export const metadata: Metadata = {
  title: "Aleksandr Chuchev",
  description:
    "Hello! 👋 My name is Aleksandr, and I’m a Front-end Developer with experience in teaching physics and system administration.",
  openGraph: {
    title: "Aleksandr Chuchev",
    description:
      "Hello! 👋 My name is Aleksandr, and I’m a Front-end Developer with experience in teaching physics and system administration.",
    url: "https://aleksandr-chuchev.netlify.app",
    siteName: "Aleksandr Chuchev",
    type: "website",
    // images: [
    //   {
    //     url: "https://i.postimg.cc/CM29rWxd/HelloBG.webp",
    //     secureUrl: "https://i.postimg.cc/CM29rWxd/HelloBG.webp",
    //     width: 1200,
    //     height: 630,
    //     alt: "Превью для сайта https://aleksandr-chuchev.netlify.app",
    //   },
    // ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={layout.layout}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
