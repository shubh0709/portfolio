import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/navbar/navbar";
import { Inter, Roboto, Poppins, Raleway, Nunito } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const nunito = Nunito({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${roboto.className} ${raleway.className} ${nunito.className}`}
      >
        <div className="bodyContainer">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
