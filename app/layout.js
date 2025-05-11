import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import AOSWrapper from "./components/aos-wrapper";
import GoogleAnalyticsWrapper from './components/google-analytics';  // Import the client component
import { ClerkProvider } from "@clerk/nextjs"

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"], // Add this line to load Poppins font
  weight: ["400", "500", "600", "700"], // Specify the weights you want to use
});

export const metadata = {
  title: "Muhammad Bilal",
  description: "Muhammad Bilal - Portfolio 0.1",
};
const frontendApi = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout({ children }) {
  return (
    <ClerkProvider frontendApi={frontendApi}

      signInUrl="/auth/sign-in"
      signUpUrl="/auth/sign-up"
      signInFallbackRedirectUrl="/projects"
      signUpFallbackRedirectUrl="/projects"
    >
      <html lang="en">
        <head>
          {/* Asynchronous loading of JS */}
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" async></script>
          <script src="https://kit.fontawesome.com/3b43a9a3b1.js" async crossOrigin="anonymous"></script>
        </head>
        <body className={`${inter.className} ${poppins.className}`}>
          <div className="flex flex-col min-h-screen select-none">
            {/* Only Google Analytics is client-side */}
            <GoogleAnalyticsWrapper />

            <AOSWrapper>{children}</AOSWrapper>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
