import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/data/content";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dongiledu.vn"),
  title: {
    default: "Dongil Edu — Tư Vấn Du Học Hàn Quốc Uy Tín",
    template: "%s | Dongil Edu",
  },
  description:
    "Công ty TNHH Tư Vấn Du Học Dongil Edu — tư vấn du học Hàn Quốc trọn gói: hệ tiếng, cao đẳng, đại học, thạc sĩ. Hơn 40 trường liên kết, lộ trình rõ ràng, chi phí minh bạch.",
  keywords: [
    "du học Hàn Quốc",
    "Dongil Edu",
    "tư vấn du học",
    "học bổng Hàn Quốc",
    "visa D2 D4",
    "du học tiếng Hàn",
  ],
  openGraph: {
    title: "Dongil Edu — Tư Vấn Du Học Hàn Quốc",
    description: SITE.slogan,
    type: "website",
    locale: "vi_VN",
    images: ["/img/hero.jpg"],
  },
  icons: { icon: "/img/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      className={`${beVietnam.variable} ${playfair.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
