import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "noslack.org",
  description: "Say no to Slack's corporate data theft with this opt-out tool.",
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "An upset person showing thumbsdown because of Slack's theft of corporate user data which requires an archaic opt-out mechanism. Fortunately, noslack.org has you covered.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "An upset person showing thumbsdown because of Slack's theft of corporate user data which requires an archaic opt-out mechanism. Fortunately, noslack.org has you covered.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>noslack.org</title>
        <meta
          name="description"
          content="Say no to Slack's corporate data theft with this opt-out tool."
        />

        <meta property="og:url" content="https://noslack.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="noslack.org" />
        <meta
          property="og:description"
          content="Say no to Slack's corporate data theft with this opt-out tool."
        />
        <meta
          property="og:image"
          content="https://noslack.org/opengraph-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="noslack.org" />
        <meta property="twitter:url" content="https://noslack.org/" />
        <meta name="twitter:title" content="noslack.org" />
        <meta
          name="twitter:description"
          content="Say no to Slack's corporate data theft with this opt-out tool."
        />
        <meta
          name="twitter:image"
          content="https://noslack.org/twitter-image.jpg"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
