import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "National Majestic – Ultra Premium 3 & 4 BHK Apartments in Edappally, Kochi",
  description: "National Majestic by National Builders – Ultra luxury 3 & 4 BHK apartments in the heart of Edappally, Kochi. RERA: K-RERA/PRJ/ERN/032/2023."
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
  "/assets/fonts/icofont/icofont.min.css",
  "/assets/custom-theme.css"
];

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WCJ73864');`}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap" rel="stylesheet" />
        <link rel="icon" href="/assets/images/national-majestic-logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/images/national-majestic-logo.png" />
        {stylesheetHrefs.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WCJ73864"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
