import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./resources/styles/globals.scss";
import "./resources/styles/reset.scss";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const SfPro = localFont({
  src: "./font/SF-Pro.ttf",
  variable: "--font-SfPro",
});

import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "DJ Holidays",
  description: "Plan your perfect holiday with DJ Holidays",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${montserrat.variable} ${SfPro.variable}`}
        suppressHydrationWarning
      >
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
