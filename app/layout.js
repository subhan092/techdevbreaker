import Navbar from "@/components/ui/Navbar";
import "./globals.css";
import { Poppins, Roboto } from "next/font/google";
import Footer from "@/components/Home/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pick weights you need
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"], // regular + medium for body text
  variable: "--font-roboto",
})

export const metadata = {
  title: "TechDevBreakers - AI-Powered Solutions for Modern Businesses",
  description: "Innovative solutions tailored for your business needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} antialiased`}
      >
        <div className="min-h-screen   text-white flex flex-col ">
        <main className="flex-1  ">
        {children}
        </main>
        <Footer/>
        </div>
      </body>
    </html>
  );
}
