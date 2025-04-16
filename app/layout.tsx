import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "easymde/dist/easymde.min.css";

const workSans = localFont({
  src: [
    {
      path: "./fonts/worksans-black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/worksans-Extrabold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/worksans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/worksans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/worksans-black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/worksans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/worksans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/worksans-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/worksans-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "YC Directory",
  description: "Pitch your idea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.variable}>{children}</body>
    </html>
  );
}
