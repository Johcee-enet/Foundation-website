import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const ibm = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Foundation || Foundation project",
  description: "Foundation is designed to usher newcomers into the dynamic world of Web3. With an emphasis on web3 education, practical experience and Campaigns",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ibm.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
