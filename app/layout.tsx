import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "National Royal Palace – Premium 3 & 4 BHK Apartments in Kochi",
  description: "National Royal Palace by National Builders – Luxury 3 & 4 BHK apartments at Pathadipalam, Edappally, Kochi. RERA: K-RERA/PRJ/ERN/156/2025."
};

const stylesheetHrefs = [
  "/assets/bootstrap.min.css",
  "/assets/plugins.css",
  "/assets/swiper.css",
  "/assets/style.css",
  "/assets/coloring.css",
  "/assets/swiper-custom-1.css",
  "/assets/datepicker.css",
  "/assets/colors/scheme-01.css",
  "/assets/fonts/et-line-font/style.css",
  "/assets/fonts/icofont/icofont.min.css"
];

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/national-royal-palace-logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/images/national-royal-palace-logo.png" />
        {stylesheetHrefs.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
