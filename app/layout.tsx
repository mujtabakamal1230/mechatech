import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mechatech | Where Ideas Become Engineered Reality",
  description:
    "Mechatech is a full-service engineering firm specializing in product design, prototyping, CAD/CAM, embedded systems, and manufacturing. 8+ years of turning innovative ideas into market-ready products.",
  keywords: [
    "engineering",
    "product design",
    "prototyping",
    "CAD",
    "manufacturing",
    "mechatronics",
    "embedded systems",
  ],
  openGraph: {
    title: "Mechatech | Engineered Reality",
    description: "From concept to production — engineering excellence since 2016.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-body antialiased`}>{children}</body>
    </html>
  );
}
