import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com/" />
    <link rel="preconnect" href="https://fonts.gstatic.com/" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="assets/css/vendor/vendor.min.css" />
    <link rel="stylesheet" href="assets/css/plugins/plugins.min.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
    </Head>
    <body>
    {children}
    <Script src="assets/js/vendor/modernizr-2.8.3.min.js"></Script>
    <Script src="assets/js/vendor/jquery-3.5.1.min.js"></Script>
    <Script src="assets/js/vendor/jquery-migrate-3.3.0.min.js"></Script>
    <Script src="assets/js/vendor/bootstrap.min.js"></Script>
    <Script src="assets/js/plugins/plugins.min.js"></Script>
    <Script src="assets/js/main.js"></Script>
    </body>
    </html>
  );
}
