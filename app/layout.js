import { Bodoni_Moda } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./components/TransitionProvider";
import Navbar from "./components/Navbar";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font--bodoni--moda",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Darko | Creative Developer And Designer",
  description: "Portfolio of creative developer and designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodoni.className}>
        <TransitionProvider exitBeforeEnter>{children}</TransitionProvider>
      </body>
    </html>
  );
}
