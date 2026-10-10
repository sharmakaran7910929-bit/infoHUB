
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Update this if your production domain is different.
const SITE_URL = "https://pricetag.co.in";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "PriceTag HUB | Information, Guides & Knowledge",
    template: "%s | PriceTag HUB",
  },

  description:
    "PriceTag HUB by K2S INFOTECH is an information hub featuring clear explanations, practical guides, and useful knowledge about artificial intelligence, technology, business, and more.",

  applicationName: "PriceTag HUB",

  authors: [
    {
      name: "K2S INFOTECH",
      url: "https://k2sinfotech.pricetag.co.in",
    },
  ],

  creator: "K2S INFOTECH",
  publisher: "K2S INFOTECH",

  keywords: [
    "PriceTag HUB",
    "information hub",
    "knowledge hub",
    "educational guides",
    "informational articles",
    "artificial intelligence",
    "machine learning",
    "generative AI",
  ],
  icons: {
  icon: "/main.png",
  shortcut: "/main.png",
  apple: "/main.png",
},

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "PriceTag HUB",
    title: "PriceTag HUB | Information, Guides & Knowledge",
    description:
      "Explore clear explanations, practical guides, and useful knowledge across AI, technology, business, and other subjects.",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "PriceTag HUB | Information, Guides & Knowledge",
    description:
      "Explore practical guides and clear explanations from PriceTag HUB by K2S INFOTECH.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Add your real verification token after obtaining it
  // from Google Search Console.
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
