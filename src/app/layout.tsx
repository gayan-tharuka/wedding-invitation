import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Josefin_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hiruni & Hasika | Wedding Invitation",
  description:
    "You are warmly invited to celebrate the union of Hiruni & Hasika on June 3, 2026 at Hotel Viverra, Girithale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${cormorant.variable} ${greatVibes.variable} ${josefin.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
