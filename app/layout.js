import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import AOSWrapper from "./components/aos-wrapper";
import GoogleAnalyticsWrapper from './components/google-analytics';
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Muhammad Bilal | Portfolio",
  description: "Official portfolio website of Muhammad Bilal, showcasing projects, skills, and contact information.",
  keywords: ["Muhammad Bilal", "Portfolio", "Web Developer", "Full Stack Developer", "Next.js", "React", "JavaScript"],
  authors: [{ name: "Muhammad Bilal", url: "https://mb-blue.vercel.app" }],
  creator: "Muhammad Bilal",
  publisher: "Muhammad Bilal",
  metadataBase: new URL("https://mb-blue.vercel.app"),
  openGraph: {
    title: "Muhammad Bilal | Portfolio",
    description: "Showcasing projects, skills, and contact details of Muhammad Bilal.",
    url: "https://mb-blue.vercel.app",
    siteName: "Muhammad Bilal Portfolio",
    images: [
      {
        url: "https://mb-blue.vercel.app/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Muhammad Bilal Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const frontendApi = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      frontendApi={frontendApi}
      signInUrl="/auth/sign-in"
      signUpUrl="/auth/sign-up"
      signInFallbackRedirectUrl="/projects"
      signUpFallbackRedirectUrl="/projects"
    >
      <html lang="en">
        <head>
          <meta property="og:title" content="Muhammad Bilal | Portfolio" />
          <meta property="og:description" content="Showcasing projects, skills, and contact details of Muhammad Bilal." />
          <meta property="og:url" content="https://mb-blue.vercel.app" />
          <meta property="og:image" content="https://mb-blue.vercel.app/og-image.jpeg" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Muhammad Bilal Portfolio" />
          {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" async></script>
          <script src="https://kit.fontawesome.com/3b43a9a3b1.js" async crossOrigin="anonymous"></script> */}
        </head>
        <body className={`${inter.className} ${poppins.className}`}>
          {/* Load jQuery */}
          <Script
            src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            strategy="afterInteractive"
          />
          {/* Load Font Awesome */}
          <Script
            src="https://kit.fontawesome.com/3b43a9a3b1.js"
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />
          <div className="flex flex-col min-h-screen select-none">
            <GoogleAnalyticsWrapper />
            <AOSWrapper>{children}</AOSWrapper>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
