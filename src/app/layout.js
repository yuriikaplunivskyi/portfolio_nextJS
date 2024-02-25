import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yurii Kaplunivskyi Portfolio App",
  description: "The animated portfolio page",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" style={{ height: '-webkit-fill-available', overflow: 'hidden'}}>
      <body className={inter.className} >
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
