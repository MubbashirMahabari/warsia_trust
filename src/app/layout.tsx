import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/animations/ScrollProgress";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import {
  constructMetadata,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#001B5C",
};

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body>
        <ThemeRegistry>
          <ScrollProgress />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              width: "100%",
              maxWidth: "100%",
              overflowX: "clip",
            }}
          >
            <Header />
            <main
              style={{
                flex: "1 0 auto",
                width: "100%",
                maxWidth: "100%",
                overflowX: "clip",
              }}
            >
              {children}
            </main>
            <Footer />
          </div>
          <WhatsAppButton />
        </ThemeRegistry>
      </body>
    </html>
  );
}
