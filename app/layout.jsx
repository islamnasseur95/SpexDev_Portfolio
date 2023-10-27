import "./globals.css";
import { Inter, Roboto_Slab } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
})

const roboto = Roboto_Slab({ 
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  display : 'swap' 
});



export const metadata = {
  title: "Islam Nasseur",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className}`}>{children}</body>
    </html>
  );
}
