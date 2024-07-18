import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactGA from "react-ga4";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

// GA4
const GA4_ID = "G-FSF4B3VE9V";
ReactGA.initialize(GA4_ID);
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
  title: "Portfolio",
});

export const metadata: Metadata = {
  title: "Imtious's Portfolio | Home",
  description: "Modern Portfolio Web APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
