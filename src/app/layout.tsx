import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import VideoBackground from "@/components/VideoBackground";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Imposto é Estratégia | LFY",
  description:
    "Recuperamos créditos tributários, blindamos sua operação e transformamos a carga fiscal em vantagem competitiva.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakarta.variable} ${dmSans.variable}`}
    >
      <body className="font-body bg-navy text-white min-h-screen overflow-x-hidden relative">
        <VideoBackground />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
