import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistMono = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
});

export const metadata = {
  title: "Diwakar Pandey",
  description: "Diwakar Pandey's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={` ${geistMono.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-light dark:bg-dark  font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
