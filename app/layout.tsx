import type { Metadata } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://veckobrev.birgir.se";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Veckobrev om AI, etik och vibe coding · Birgir Birgisson",
  description:
    "Varje onsdag eftermiddag. En personlig reflektion, en konkret AI-insikt, en mikroövning. Inget spam.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Veckobrev · Birgir Birgisson",
    title: "Veckobrev om AI, etik och vibe coding",
    description:
      "Varje onsdag eftermiddag. En personlig reflektion, en konkret AI-insikt, en mikroövning. Inget spam.",
    locale: "sv_SE",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Veckobrev om AI, etik och vibe coding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veckobrev om AI, etik och vibe coding",
    description:
      "Varje onsdag eftermiddag. En personlig reflektion, en konkret AI-insikt, en mikroövning. Inget spam.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${inter.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
