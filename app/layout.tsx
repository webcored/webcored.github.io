import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "webcored",
  description: "Elevate Your Digital Presence with Webcored",
  keywords: ["webcored", "consulting", "web development", "web design"],
  openGraph: {
    title: "webcored",
    description: "Elevate Your Digital Presence with Webcored",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "webcored",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "webcored",
    description: "Elevate Your Digital Presence with Webcored",
    images: ["/og.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
