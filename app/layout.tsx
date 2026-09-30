import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = localFont({
  src: "./fonts/CormorantGaramond-Variable.ttf",
  variable: "--font-display",
  weight: "300 700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ruth Gems | Ceylon's Finest Gemstones",
  description:
    "Ratnapura, Sri Lanka — hand-selected, independently certified Ceylon sapphires, rubies and rare gemstones. Arrange a private viewing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
