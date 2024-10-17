import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/Nav/nav";
import { Footer } from "./components/Footer";
import AOSWrapper from "./components/aos-wrapper";
import GoogleAnalyticsWrapper from './components/google-analytics';  // Import the client component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Bilal",
  description: "Muhammad Bilal - Portfolio 0.1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
        <script src="https://kit.fontawesome.com/3b43a9a3b1.js" crossOrigin="anonymous"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen select-none">
          {/* Only Google Analytics is client-side */}
          <GoogleAnalyticsWrapper />
          <Nav />
          <AOSWrapper>{children}</AOSWrapper>
          <Footer />
        </div>
      </body>
    </html>
  );
}
