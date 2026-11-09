import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/animations/ScrollProgress";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { constructMetadata, generateOrganizationSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateOrganizationSchema();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/logo/warsia-logo.png" />
      </head>
      <body>
        <ThemeRegistry>
          <ScrollProgress />
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100%", maxWidth: "100%", overflowX: "clip" }}>
            <Header />
            <main style={{ flex: "1 0 auto", width: "100%", maxWidth: "100%", overflowX: "clip" }}>{children}</main>
            <Footer />
          </div>
          <WhatsAppButton />
        </ThemeRegistry>
      </body>
    </html>
  );
}
